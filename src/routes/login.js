const express= require('express');
const router= express.Router();

const loginControlador= require('../controllers/loginControlador');

router.get('/',loginControlador.mostrar);
module.exports= router;