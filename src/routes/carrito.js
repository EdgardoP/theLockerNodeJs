const express = require('express');
const router = express.Router();
const carritoContolador = require('../controllers/carritoControlador');

router.get("/carrito", carritoContolador.mostrarCarrito)

module.exports = router;
