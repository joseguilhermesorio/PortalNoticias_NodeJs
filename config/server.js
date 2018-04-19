var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

//Configurações do EJS
app.set('view engine', 'ejs');
app.set('views','./app/views');


//INCLUSAO DE CSS E JAVASCRIPT
app.use(express.static('./app/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: true
})); //Passando o bodyParser como middleware

app.use(expressValidator());//Inclusão do express Validator

//Inclusão de Rotas e models
consign()
	.include('./app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;