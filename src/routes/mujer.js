const express = require('express');
const router = express.Router();
const mujerControlador = require('../controllers/mujerControlador');

router.get("/ropaMujer", mujerControlador.mostrarRopaMujer)

module.exports = router;