const express = require('express');
const router = express.Router();
const carritoContolador = require('../controllers/carritoControlador');

router.get("/carrito", carritoContolador.mostrarCarrito)
router.get("/guardarCarrito/:id", carritoContolador.guardarCarrito)
router.get("/eliminarProducto/:id", carritoContolador.eliminarProducto)
module.exports = router;