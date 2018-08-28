var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var morgan = require('morgan');
var db = require('./models');
var app = express();

app.set('view engine', 'ejs');
app.use(require('morgan')('dev'));
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public/'));

// Add route to root path here
app.get('/', function(req, res) {
	res.render('index');
})

// Add route to /tacos here
app.use('/tacos', require('./controllers/tacos'));

var server = app.listen(3000);

module.exports = server;
