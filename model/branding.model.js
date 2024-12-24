const mongo = require("mongoose");

const {Schema} = mongo;

const brandingSchema = new Schema({
    name : String,
    email : String,
    password : String,
    mobile : String,
    domain : String,
    facebook : String,
    twitter : String,
    whatsapp : String,
    linkedIn : String,
    instagram : String,
    about : String,
    privacy : String,
    cookie : String,
    terms : String,
    profile : String,
    address : String,
    createdAt : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongo.model("branding",brandingSchema);