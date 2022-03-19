const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Este modelo nos permite ver las estructura en el cual se van a pasar los valores,
para ser almacenados en la base de datos: En este modelo vamos a poder almacenar el id y el array de peliculas de cada usuario */

const mylistSchema = mongoose.Schema({
    /*Id del usuario al que corresponde la lista*/
    idUser:{
        type: Schema.Types.ObjectId,
        require:true
    },
    /*Array de las peliculas del usuario*/
    list:[String]
},{versionKey:false});

const list = mongoose.model('mylist', mylistSchema);
module.exports = list;