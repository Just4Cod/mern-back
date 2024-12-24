const dbService = require("../services/db.service");

const read = async (req,res,schema) =>{
    try{
        const dbRes = await dbService.readRecord(schema);
        res.status(200).json(dbRes);
    }catch(err){
        res.status(424).json({
            message : 'Unable to get data !',
            error : err
        })
    }
}

const readDocument = async (req,res,schema) =>{
    try{
        const dbRes = await dbService.readCountRecord(schema);
        res.status(200).json(dbRes);
    }catch(err){
        res.status(424).json({
            message : 'Unable to get data !',
            error : err
        })
    }
}

const readLimited = async (req,res,schema) =>{
    try{
        const limit = parseInt(req.query.limit) || 10; // Default limit to 10
        const page = parseInt(req.query.page) || 1;   // Default to first page
        const skip = (page - 1) * limit;
        const dbRes = await dbService.readLimitedRecord(schema,skip,limit);
        res.status(200).json(dbRes);
    }catch(err){
        res.status(424).json({
            message : 'Unable to get data !',
            error : err
        })
    }
}

const create = async (req,res,schema) =>{
    try{
        const data = req.body;
        const dbRes = await dbService.createRecord(data,schema);
        res.status(200).json({
            message : 'Record created !',
            data : dbRes
        });
    }catch(err){
        res.status(424).json({
            message : 'Unable to create data !',
            error : err
        })
    }
}

const update = async (req,res,schema) =>{
    try{
        const id = req.params.id;
        const data = req.body;
        const dbRes = await dbService.updateRecord(id,data,schema);
        res.status(200).json({
            message : 'Record updated !',
            data : dbRes
        });
    }catch(err){
        res.status(424).json({
            message : 'Unable to update data !',
            error : err
        })
    }
}

const remove = async (req,res,schema) =>{
    try{
        const id = req.params.id;
        const dbRes = await dbService.removeRecord(id,schema);
        res.status(200).json({
            message : 'Record deleted !',
            data : dbRes
        });
    }catch(err){
        res.status(424).json({
            message : 'Unable to delete data !',
            error : err
        })
    }
}

const filterByQuery = async (req,res,schema) =>{
    try{
        const lang = req.params.query;
        const query = {
            language : lang
        }
        const dbRes = await dbService.findByQuery(query,schema);
        res.status(200).json({
            data : dbRes
        });
    }catch(err){
        res.status(424).json({
            message : 'Unable to find by data !',
            error : err
        })
    }
}

module.exports = {
    read,
    create,
    update,
    remove,
    readLimited,
    readDocument,
    filterByQuery
}