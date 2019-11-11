// server.js

var express = require('express');
var http = require('http');
var Sim = require('./simulator.js');
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
});
*/



const sim = new Sim(100);

app.get('/', function(req, res) {
	var test = sim.getPrice();
    res.status(200).send(""+test+"");
});

