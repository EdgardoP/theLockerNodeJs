const express = require('express');
const router = express.Router();
const explorarControlador = require('../controllers/explorarControlador');

router.get("/explorar", explorarControlador.mostrarExplorar)

module.exports = router;