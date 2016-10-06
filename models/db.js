var mongoose = require('mongoose');
var dbpath = 'mongodb://localhost/asistencia';
mongoose.Promise = global.Promise;
mongoose.connect(dbpath, function(){
	console.log('MongoDB conectado.');
});

module.exports = mongoose;
