var db = require('./db');

var asistenteSchema = new db.Schema({
  nombre: {
    type: String,
    unique: false,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  }
});

module.exports = db.model('Asistente', asistenteSchema);
