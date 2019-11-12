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

app.route('/')
	.get((req,res)=>{
		//res.redirect('/website/index.html');
		res.render('/website/index.html');
	});
/*
app.get('/', function(req, res) {
    res.status(200).send('Hello world');
});
*/



//Send kw/day for X m^2
const sim = new Sim(36,300);

app.get('/', function(req, res) {
	var test = sim.getTotalPrice();
    res.status(200).send(""+test+"");
});

