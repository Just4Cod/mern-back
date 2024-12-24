const express = require('express');
const router = express.Router();
const controller = require("../controller/controller");
const booksSchema = require("../model/books.model");

router.get('/',(req,res)=>{
    controller.readDocument(req,res,booksSchema);
});

router.post('/:query',(req,res)=>{
    controller.filterByQuery(req,res,booksSchema);
});

module.exports = router;