const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

/* Crear el nuevo usuario */
router.post('/user', userController.create);

/* Nos permite crear el correo */
router.post('/user/:email', userController.login);

module.exports = router;