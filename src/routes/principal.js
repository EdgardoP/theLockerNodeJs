const express = require('express');
const router = express.Router();

const principalControlador = require('../controllers/principalControlador')

router.get('/principal', principalControlador.list)

module.exports = router;