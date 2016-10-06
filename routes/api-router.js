var router = require('express').Router();
var controladorAsistencia = require('../controllers/asistencia');
router.get('/listar', controladorAsistencia.listar);
router.post('/registrar', controladorAsistencia.registrar);
router.delete('/eliminar/:id', controladorAsistencia.eliminar);
module.exports = router;
