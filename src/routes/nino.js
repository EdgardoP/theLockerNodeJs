const express = require('express');
const router = express.Router();
const ninoControlador = require('../controllers/ninoControlador');

router.get("/ropaInfantil", ninoControlador.mostrarRopaInfantil)

module.exports = router;