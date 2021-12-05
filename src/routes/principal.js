const express = require('express');
const router = express.Router();

const principalControlador = require('../controllers/principalControlador')

router.get('/', principalControlador.list)
    //router.get('/ropaHombre', principalControlador.ropaHombre)

module.exports = router;