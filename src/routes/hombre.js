const express = require('express');
const router = express.Router();
const hombreControlador = require('../controllers/hombreControlador');

router.get("/ropaHombre", hombreControlador.mostrarRopaHombre)

module.exports = router;