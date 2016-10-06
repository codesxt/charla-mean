var mongoose = require('mongoose');
var dbpath = process.env.MONGODB_URI || 'mongodb://localhost/asistencia';
mongoose.Promise = global.Promise;
mongoose.connect(dbpath, function(){
	console.log('MongoDB conectado.');
});

module.exports = mongoose;
