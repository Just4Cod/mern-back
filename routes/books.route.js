const express = require('express');
const router = express.Router();
const controller = require("../controller/controller");
const booksSchema = require("../model/books.model");

router.get('/',(req,res)=>{
    controller.read(req,res,booksSchema);
});

router.get('/items',(req,res)=>{
    controller.readLimited(req,res,booksSchema);
});

router.post('/',(req,res)=>{
    controller.create(req,res,booksSchema);
});

router.put('/:id',(req,res)=>{
    controller.update(req,res,booksSchema);
});

router.delete('/:id',(req,res)=>{
    controller.remove(req,res,booksSchema);
});

module.exports = router;