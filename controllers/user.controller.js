const userService = require('../services/user.service');
const userController = {};

userController.create  = async function (req, res, next) {
    try {
        const newUser = await userService.createUser(req.body);
        return res.status(201).json({newUser});
    } catch (error) {
        return res.status(400).json({status: 400, message: error.message})
    }
}

userController.login = async function (req, res, next) {
    try {
        const loginUser = await userService.login(req.params, req.body);
        return res.status(200).json({loginUser});
    } catch(error) {
        return res.status(400).json({status: 400, message: error.message})
    }
}

module.exports = userController;