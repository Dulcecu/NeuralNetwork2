var express = require('express')
var bodyParser = require( 'body-parser' );
var app = express();
var username = "";
app.use( bodyParser.urlencoded({ extended: true }) );
var mongoose = require('mongoose');
var multer = require('multer');
var Hash = require('jshashes');
var cors = require('cors');
var session = require('express-session')
module.exports=app;
var path = require('path');
var u;
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin",  "*");
res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE,OPTIONS");
res.header('Access-Control-Allow-Headers', "Content-Type, Authorization, Content-Length, X-Requested-With,X-Custom-Header,Origin");
res.header('Access-Control-Allow-Credentials',"true")
next();
});
app.listen(3500, function () {
    console.log('App listening on port 3500!!')
});

