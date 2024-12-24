const express = require('express');
const router = express.Router();
const controller = require("../controller/controller");
const brandingSchema = require("../model/branding.model");

router.get('/',(req,res)=>{
    controller.read(req,res,brandingSchema);
});

router.post('/',(req,res)=>{
    controller.create(req,res,brandingSchema);
});

router.put('/:id',(req,res)=>{
    controller.update(req,res,brandingSchema);
});

router.delete('/:id',(req,res)=>{
    controller.remove(req,res,brandingSchema);
});

module.exports = router;