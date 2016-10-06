var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./routes/api-router');
var staticRouter = require('./routes/static-router');

var app = express();
app.use(bodyParser.json());
app.use('/', staticRouter);
app.use('/api', apiRouter);
var server = app.listen(3000, function(){
	console.log('Servidor escuchando en el puerto: ', 3000);
});
