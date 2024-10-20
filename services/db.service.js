const mongo = require("mongoose");

const url = "mongodb+srv://justforcodeservice:Just786088@cluster0.nnmcl37.mongodb.net/r-crud";

mongo.connect(url);

const readRecord = async (schema) =>{
    const dbRes = await schema.find().sort({_id:-1});
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

module.exports = {
    readRecord,
    createRecord,
    updateRecord,
    removeRecord
}