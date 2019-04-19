const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const cors = require('cors')

const mongoose = require('mongoose')
// mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/exercise-track' )

// Connect to Database
var database = mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}, function(error) {
  if(error) {
    console.log(error);
  } else {
    console.log("connection successful");
  }
});

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


// Not found middleware
app.use((req, res, next) => {
  return next({status: 404, message: 'not found'})
})

// Error Handling middleware
app.use((err, req, res, next) => {
  let errCode, errMessage

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt')
    .send(errMessage)
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

// Database schemas
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String 
});

var exerciseLogSchema = new Schema({
  userId: String,
  description: String,
  duration: Number,
  date: String
});

// Create models
var user = mongoose.model('User', userSchema);
var exerciseLog = mongoose.model('ExerciseLog', exerciseLogSchema);

// Save documents
var saveUser = function(user, done) {
  user.save(function(err, data) {
    if(err){
      return done(err);
    }
    done(null, data);
  });
};

var saveExerciseLog = function(exerciseLog, done) {
  exerciseLog.save(function(err, data) {
    if(err){
      return done(err);
    }
    done(null, data);
  });
};
