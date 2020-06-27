var express = require('express');
var app = express();
var rutas = require('./rutas/rutas.js');
var port = 3000;

app.use('/', rutas);
app.set('view engine', 'ejs');

function c_server() {
    console.log('Escuchando en puerto 3000 !!!');
}

var server = app.listen(port, c_server);