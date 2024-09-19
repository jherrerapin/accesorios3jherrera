const express = require('express');
//Manejador de rutas
const router  = express.Router();

//import controller home
const homeController = require('../controllers/homecontroller');
const usuariosController = require('../controllers/usuariosController');

module.exports = function(){
    //home Route
    router.get('/', homeController.Home);

    //Cuentas
    //login route
    router.get('/iniciar-sesion', usuariosController.formIniciarSesion);

    //Products route
    router.get('/productos',homeController.Productos);

    return router;
}

