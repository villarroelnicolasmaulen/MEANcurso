const { Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const router = Router();

// crear un nuevo usuario
router.post('/new', crearUsuario);

// login de usuario
router.post('/',[
    // npm express validator
    check('email', 'El email es obligatorio').isEmail()

] , loginUsuario);

// Validar y revalidar token
router.get('/renew', revalidarToken );


// exportar cosas
module.exports = router;