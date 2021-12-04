const express = require('express');
const router = express.Router();

const registroControlador = require('../controllers/registroControlador');

router.get('/', registroControlador.mostrar);
router.post('/add', registroControlador.save);

module.exports = router;