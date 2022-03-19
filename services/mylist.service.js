const mylist = require('../models/mylist.model');
const mongoose = require('mongoose');

/* Las funciones asíncronas le permiten escribir código basado en Promise como si fuera sincrónico, Cuando la función asíncrona devuelve un valor, la promesa se cumple, si la función asíncrona arroja un error, se rechaza. */

/* .find() : Es utilizado para encontrar datos particulares de la base de datos */
/* .save() : Es utilizado para guardar el documento en la base de datos */
/* .pull() : Es utilizado para eliminar un elemento de la colección mediante la clave dada y devolver el elemento extraído */

const mylistService = {}
/* Funciones */
async function findUser(idUser){
    try{
        const user = mylist.findOne({idUser: mongoose.Types.ObjectId(idUser)});
        return user ? user : null;
    }catch (e){
        throw new Error('Error while find list')
    }
}

async function createMylist(idUser, movies){
    try{
        const list = new mylist({idUser, movies})
        const newList = await list.save();
        return newList;
    }catch(e){
        throw new Error('Error while save list');
    }
}

async function updatelist(user, movies){
    try{
        user.movies.push(movies.toString());
        user.save();
        return user;
    }catch (e){
        throw new Error('Error while update list');
    }
}

async function deletesMovie(user, movies){
    try{
        user.movies.pull(movies.toString());
        user.save();
        return user;
    }catch (e){
        throw new Error('Error while deletes Item');    
    }
}

/* Servicios */

mylistService.upsertMylist = async function({idUser, movies}){
    try{
        const user = await findUser(idUser);
        if(user){
            return await updatelist(user, movies);
        }

        return await createMylist(idUser, movies);
    }catch(e){
        throw new Error('Error while upsert Mylist');
    }
}

mylistService.getMylist = async function({id}){
    try{
        const mylists = await mylist.find({idUser: mongoose.Types.ObjectId(id)});
        return mylists;
    }catch(e){
        throw new Error ('Error while paginating mylist');
    }
}

mylistService.deleteMylist = async function({movies, idUser}){
    try{
        const user = await findUser(idUser);
        if(user){
            return await deletesMovie(user, movies);
        }
    }catch(e){
        throw new Error('Error while delete Item');
    }
}

module.exports = mylistService;