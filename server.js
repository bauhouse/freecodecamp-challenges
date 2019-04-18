'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var url = require('url');
var dns = require('dns');
var shortid = require('shortid');

var cors = require('cors');

var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;

// Connect to Database
var database = mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}, function(error) {
  if(error) {
    console.log(error);
  } else {
  console.log("connection successful");
  }
});

app.use(cors());

// Mount body-parser
app.use(bodyParser.urlencoded({extended: false}));

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  
// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


var listener = app.listen(process.env.PORT || 3000 , function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// ==================================================
// URL Shortener
// ==================================================

// Database schemas
var Schema = mongoose.Schema;

var counterSchema = new Schema({
  url_id: String,
  sequence: Number 
});

var shortUrlSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  url_id: Number,
  url_string: {
    type: String,
    required: true
  },
  url: {
    type: Object,
    required: true
  }
});

// Create models
var ShortURL = mongoose.model('ShortURL', shortUrlSchema);
var Counter = mongoose.model('Counter', counterSchema);

// Declare variables
var url_id = 1;
var address = "https://google.com";
var address_url = new URL(address);

// Create a short URL entry
var shortUrl = new ShortURL({
  url_id: url_id,
  url_string: address,
  url: address_url
});

// Save the short URL entry
var createAndSaveURL = function(done) {
  shortUrl.save(function(err, data) {
    if(err){
      return done(err);
    }
    done(null, data);
  });
};

// createAndSaveURL(function(err, data) {});


// Find URL entry
var findURLById = function(id, done) {
  
  ShortURL.findById(id, function(err, data) {
    if(err) {
      done(err);
    }
    done(null, data);
  });  
  
};

// Auto increment entry id
var count = 1;
var counter = new Counter({
  url_id: url_id,
  sequence: count
});

var getNextSequenceValue = function(url_id){

   var sequenceDocument = Counter.findAndModify({
      query: {url_id: url_id },
      update: {$inc:{sequence:1}},
      new: true
   });
	
   return sequenceDocument.sequence;
}

var createAndSaveCounter = function(done) {
  counter.save(function(err, data) {
    if(err){
      return done(err);
    }
    done(null, data);
  });
};

// createAndSaveCounter(function(err, data) {});


// Use body-parser to retrieve POST data
app.post("/api/shorturl/new", function(req, res) {

  try {
    // Parse URL
    var url_string = req.body.url;
    var url = new URL(url_string);

    // Test protocol
    if ( url.protocol == 'http:' || url.protocol == 'https:' ) {

      // DNS lookup
      var url_lookup = dns.lookup(url.hostname, function (err, addresses, family) {
        if (err) {
          invalidResponse();
        } else {
          
          var urlEntry = createShortURL(url_id, url_string, url);
        }
      });

    } else {
      invalidResponse();
    }
  }
  catch(err) {
    invalidResponse();
  }

  // Create short URL entry and JSON response
  var createShortURL = function(url_id, url_string, url) {
    console.log("Create Short URL");
    console.log("url_id: " + url_id);
    console.log("url_string: " + url_string);
    console.log("url:");
    console.log(url);

    // JSON response
    res.json( {original_url: url.hostname, short_url: url_id} );
  }
  
  // Invalid URL response
  var invalidResponse = function() {
    res.json({"error": "Invalid URL"});
  }
  
});

// Redirect short URL to original URL
var handleRedirect = function(req, res) {
  let req_url_id = req.params.url_id;
  var url_entry = findURLById(req_url_id, function(err, data){
    
  });
  console.log( url_entry );
  var targetUrl = "https://github.com/builders";
  res.json({ url: targetUrl, id: req_url_id });
  // res.redirect(targetUrl);
}

app.get("/api/shorturl/:url_id", handleRedirect);