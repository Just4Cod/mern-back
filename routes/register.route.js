const express = require('express');
const router = express.Router();
const controller = require("../controller/controller");
const registerSchema = require("../model/register.model");

router.get('/',(req,res)=>{
    controller.read(req,res,registerSchema);
});

router.post('/',(req,res)=>{
    controller.create(req,res,registerSchema);
});

router.put('/:id',(req,res)=>{
    controller.update(req,res,registerSchema);
});

router.delete('/:id',(req,res)=>{
    controller.remove(req,res,registerSchema);
});

module.exports = router;