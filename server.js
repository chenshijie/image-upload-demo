var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());
app.use(express.static('public'));

var formidable = require('formidable');
app.post('/upload', function(req, res) {
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.keepExtensions = true; //keep .jpg/.png
    form.uploadDir = "public/upload/"; //upload path});
    form.multiples = true;
    form.parse(req, function(err, fields, files) {
        console.log(fields);
        console.log(files);
        console.log("parse!");
    }); //bind event handler
    form.on("progress", function(err) {});
    form.on("complete", function(err) {});
    form.on("error", function(error) {
        console.log(error);
    });
});
app.listen('9527');