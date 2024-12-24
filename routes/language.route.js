const express = require('express');
const router = express.Router();
const controller = require("../controller/controller");
const languageSchema = require("../model/language.model");

router.get('/',(req,res)=>{
    controller.read(req,res,languageSchema);
});

router.post('/',(req,res)=>{
    controller.create(req,res,languageSchema);
});

router.put('/:id',(req,res)=>{
    controller.update(req,res,languageSchema);
});

router.delete('/:id',(req,res)=>{
    controller.remove(req,res,languageSchema);
});

module.exports = router;