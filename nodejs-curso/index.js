/**const fs = require('fs');

fs.writeFile('./texto.txt', 'linea uno', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado');
});

console.log('AUltima linea');**/


/**fs.readFile('./texto.txt', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
})**/

/**
//primera forma de crear nuestro servidor.
const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Hola mundo NodeJs</h1>');
    res.end();
}).listen(3000);

//Segunda forma de crear nuestro servidor.
const http = require('http');
const handleServer = function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Hola mundo NodeJs</h1>');
    res.end();
}
http.createServe(handleServer).listen(3000);

 **/

/** 
//tercera forma de crear nuestro servidor.
const http = require('http');
const color =require('colors');
const handleServer = function (req, res) {
   res.writeHead(200, { 'content-type': 'text/html' });
   res.write('<h1>Hola mundo </h1>');
   res.end();
}
const server = http.createServer(handleServer);
server.listen(3000, function () {
   console.log('Server Escuchando'.green);
});*/

const express = require('express');
const server = express();
const color = require('colors');

server.get('/', function (req, res) {
    res.send('<h1>Hola Mundo Express</h1>')
    res.end();
});

server.listen(3000, function () {
    console.log('Server Escuchando Express'.yellow);
});