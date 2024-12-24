const mongo = require("mongoose");

const {Schema} = mongo;

const languageSchema = new Schema({
    language : String,
    createdAt : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongo.model('language',languageSchema);