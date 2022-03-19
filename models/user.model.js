const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Este modelo nos permite ver las estructura en el cual se van a pasar los valores,
para ser almacenados en la base de datos: En este modelo vamos a poder almacenar el nombre, el correo 
y la contraseña del usuario */

const userSchema = new Schema({
    email:{
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
},{versionKey:false});

const User = mongoose.model('User', userSchema);
module.exports = User;