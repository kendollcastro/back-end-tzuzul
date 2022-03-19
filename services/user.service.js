const md5 = require('md5');
const User = require('../models/user.model');

const userService = {}

/* Servicio para crear el usuario */
userService.createUser = async function({email, password}) {
    try {
        const user = new User({email, password: md5(password)});
        const newUser = await user.save();
        return newUser;
    }catch (e) {
        console.log(e.message);
        throw new Error('Error while save user');   
    }
}

/* Servicio para el log in */
userService.login = async function({email}, {password}) {
    try{
        const users = await User.find({email:email});
        if(users[0].password == md5(password)){
            return data = {
                id:users[0]._id,
                status: true
            }
        }else {
            return data = {
                status: false
            }
        };
    }catch(e) {
        console.log(e.message);
        throw new Error ('Error while login user');
    }
}

module.exports = userService;