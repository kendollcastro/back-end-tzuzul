const mylistService = require('../services/mylist.service');
const mylistController = {};


mylistController.upsert = async function (req, res, next){    
    try{    
        const upsertmylist = await mylistService.upsertMylist(req.body);
        return res.status(201).json({status: 201, data: upsertmylist});

    }catch (error){

        return res.status(400).json({status: 400, message: error.message})
    }
}

mylistController.getMylist = async function (req, res, next){
    try{
        const mylist = await mylistService.getMylist(req.params);

        return res.status(200).json({status: 200, data:mylist, message:"Succesfully mylist retrived"});

    }catch(error){
        
        return res.status(400).json({status: 400, message: error.message});
    }
}
mylistController.delete = async function (req, res, next){
    try{
        const deleteMylist = await mylistService.deleteMylist(req.body);

        return res.status(200).json({status: 200, data:deleteMylist});
    }catch(error){

        return res.status(400).json({status: 400, message: error.message});
    }
}

module.exports = mylistController;