const mongo = require("mongoose");

const {Schema} = mongo;

const booksSchema = new Schema({
    thumbnail : String,
    language : String,
    pdfLink : String,
    pdfSize : String,
    type : String,
    totalPage : String,
    authorName : String,
    title : String,
    desc : String,
    published : String,
    createdAt : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongo.model("book",booksSchema);