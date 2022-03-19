const express = require('express');

//Nos permite obtener el controlles del mylist
const mylistController = require('../controllers/mylist.controller');
const router = express.Router();

//Nos permite agregar y actualizar las peliculas de mylist
router.put('/mylist', mylistController.upsert);

//Nos permite obtener las peliculas de mylist
router.get('/mylist/:id', mylistController.getmylist);

//Nos permite eliminar las peliculas de mylist
router.delete('/mylist', mylistController.delete);

//Exportamos el module de router, para ser utilizado en otro archivo
module.exports = router;