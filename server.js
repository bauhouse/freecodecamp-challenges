'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var url = require('url');
var dns = require('dns');

var cors = require('cors');

var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;

// Connect to Database
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true});

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


app.listen(port, function () {
  console.log('Node.js listening ...');
});


// URL shortener
// ==================================================

// Use body-parser to retrieve POST data
app.post("/api/shorturl/new", function(req, res) {

  // Declare valid as boolean variable
  var valid = false;

  // Parse URL
  try {
    var url = new URL(req.body.url);

    // Test protocol
    if ( url.protocol == 'http:' || url.protocol == 'https:' ) {
      valid = true;
    } else

    // DNS lookup
    var url_lookup = dns.lookup(url.hostname, function (err, addresses, family) {
      if (err) {
        valid = false;
        return invalidResponse();
      }
    });
  
    // JSON response
    if (valid) {
      res.json( {original_url: url.hostname, short_url: '1'} );
    } else {
      invalidResponse();
    }
  }

  // Unable to parse URL
  catch(err) {
    invalidResponse();
  }
  
  function invalidResponse() {
    res.json({"error": "Invalid URL"});
  }
  
});

// Evaluate and respond to URL input
try {
  // Parse URL
  var url = new URL('htt://blah.blah');
  console.log("Protocol: " + url.protocol);
  console.log("Host: " + url.host);
  console.log("Hostname: " + url.hostname);
  console.log("Pathname: " + url.pathname);
  var valid = true;
  // Test protocol
  if ( url.protocol == 'http:' || url.protocol == 'https:' ) {
    console.log( {protocol: 'valid'} );

    // DNS lookup
    var url_lookup = dns.lookup(url.hostname, function (err, addresses, family) {
      if (err) {
        console.log({lookup: "error"});
      } else {
        console.log({lookup: "success"});

        // JSON response
        if (valid) {
          console.log( {original_url: url.hostname, short_url: '1'} );
        } else {
          invalidResponse();
        }
        
      }
    });
  
  } else {
    console.log( {protocol: 'invalid'} );
    invalidResponse();
  }
}
catch(err) {
  invalidResponse();
}

function invalidResponse() {
  console.log({"error": "Invalid URL"});
}
