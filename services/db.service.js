require("dotenv").config();
const mongo = require("mongoose");

const url = process.env.DBCLOUDURL;

//const url = process.env.DATABASEURL;

mongo.connect(url);

const readRecord = async (schema) =>{
    const dbRes = await schema.find().sort({_id:-1});
    return dbRes;
}

const readCountRecord = async (schema) =>{
    const dbRes = await schema.countDocuments();
    return dbRes;
}

const readLimitedRecord = async (schema,skip,limit) =>{
    const dbRes = await schema.find().skip(skip).limit(limit).sort({_id:-1});
    return dbRes;
}

const createRecord = async (data,schema) =>{
    const dbRes = await new schema(data).save();
    return dbRes;
}

const updateRecord = async (id,data,schema) =>{
    const dbRes = await schema.findByIdAndUpdate(id,data,{new:true});
    return dbRes;
}

const removeRecord = async (id,schema) =>{
    const dbRes = await schema.findByIdAndDelete(id);
    return dbRes;
}

const findByQuery = async (query,schema) =>{
    const dbRes = await schema.find(query);
    return dbRes;
}

module.exports = {
    readRecord,
    createRecord,
    updateRecord,
    removeRecord,
    findByQuery,
    readLimitedRecord,
    readCountRecord
}