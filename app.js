var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const database = require( './lib/ronin-database' )

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const routes = require( './routes' )

app.use('/', routes );

database
  .connect( 'mongodb+srv://zion-admin:asdf234rassbsdb0924lkmfsb98yj;mqwef@cluster0-itpgx.mongodb.net/test?retryWrites=true&w=majority' )
  .then( () => {
    console.log( 'connected to database' )
  })
  .catch( error => {
    console.error( error )
  })



module.exports = app;
