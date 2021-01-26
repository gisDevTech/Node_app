//http
// var http = require('http');
// http.createServer(function(req, res){
//     res.writeHead(200);
//     res.end('hello http server');
// }).listen(3000);

//express
var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.send('hello express');
});
app.all('/admin', function(req, res){
    res.send('hello express all');
});
app.listen(3000);x
