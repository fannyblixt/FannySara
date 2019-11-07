// server.js

var express = require('express');
var http = require('http');
var app = express();
var PORT = 3000;
var server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Hello world\n");
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});
/*
app.get('/', function(req, res) {
    res.status(200).send('Hello world');
});*/

const Sim = require('./simulator.js');

const sim = new Sim(10);

app.use('/',function(req,res){
      //sql.users.controlID();
  });
