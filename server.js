// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// time server
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res, next) {
  res.json( {time: req.time} );
  next();
});


// timestamp server
app.get('/api/timestamp/:date_string', function(req, res, next) {
  let date_string = req.params.date_string;
  let date = new Date(date_string);
  let unix = date.getTime();
  let utc = date.toUTCString();
  if (!Date.parse(date_string)) {
    return res.json({"error": "Invalid Date"});
  }
  res.json({ "unix": unix, "utc": utc });
  next();
});
