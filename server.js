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

// Create form to POST URLs
app.get("/api/shorturl/new", function (req, res) {
  res.sendFile(process.cwd() + '/views/shorturl.html');
});

// Use body-parser to retrieve POST data
app.post("/api/shorturl/new", function(req, res) {
  // Parse URL
  let url = new URL(req.body.url);
  let valid = true;
  let url_lookup = dns.lookup(url, function (err, addresses, family) {
    if (err) {
      valid = false;
      res.json({"error": "Invalid URL"});
    }
    res.json( {url: url, valid: valid} );
  });
});

// Evaluate and respond to URL input
try {
  // Parse URL
  let url = new URL('https://google.com');
  console.log("Protocol: " + url.protocol);
  console.log("Host: " + url.host);
  console.log("Hostname: " + url.hostname);
  console.log("Pathname: " + url.pathname);
  let valid = true;
  // Test protocol
  if ( url.protocol == 'http:' || url.protocol == 'https:' ) {
    console.log( {protocol: 'valid'} );
  } else {
    valid = false;
    console.log( {protocol: 'invalid'} );
  }
  // DNS lookup
  let url_lookup = dns.lookup(url.hostname, function (err, addresses, family) {
    if (err) {
      valid = false;
    }
  });
  // JSON response
  if (valid) {
    console.log( {original_url: url.hostname, short_url: '1'} );
  } else {
    console.log({"error": "Invalid URL"});
  }
}
catch(err) {
  console.log({"error": "Invalid URL"});
}
