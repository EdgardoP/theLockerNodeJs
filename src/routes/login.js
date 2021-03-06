const express = require('express');
const router = express.Router();

const loginControlador = require('../controllers/loginControlador');

router.get('/', loginControlador.mostrar);
router.get('/registro', loginControlador.mostrarRegistro)
router.post('/principal', loginControlador.inicioSesion)

module.exports = router;