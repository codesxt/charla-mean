var mongoose = require('mongoose');
var Asistente = require('../models/asistente');

module.exports.listar = function(req, res){
  // Código para listar asistentes
  Asistente
  .find()
  .exec(function(err, asistentes){
    res
    .status(200)
    .json(asistentes);
  });
};

module.exports.registrar = function(req, res){
  // Código para registrar un asistente
  var nuevoAsistente = new Asistente();
  nuevoAsistente.nombre = req.body.nombre;
  nuevoAsistente.email = req.body.email;
  nuevoAsistente.save(function(err){
    if(err){
      console.log(err);
    }
    res.status(200);
    res.json(nuevoAsistente);
  });
};

module.exports.eliminar = function(req, res){
  // Código para eliminar un asistente
  Asistente
  .remove({
    _id: req.params.id
  })
  .exec(function(err){
    res
    .status(200)
    .json({
      _id: req.params.id
    });
  });
};
