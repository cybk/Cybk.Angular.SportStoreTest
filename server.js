var express = require('express');
var path = require('path');
var products = require('./Angular/Components/Products')

var app = express();


app.set("Sports Store Test Site", "Application Title");

app.use('/Angular', express.static(path.join(__dirname + '/Angular')));
console.log("path " + path.join(__dirname + '/Angular'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/app.html');
    
});

app.use('/views', express.static(path.join(__dirname + '/Angular/Views')));

app.use('/components', express.static(path.join(__dirname + '/Angular/Components')));


app.get('/Products', products.findAll);

app.listen(5000);
