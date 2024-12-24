const express = require('express');
const router = express.Router();
const controller = require("../controller/login.controller");
const brandingSchema = require("../model/branding.model");

router.post('/',(req,res)=>{
    controller.login(req,res,brandingSchema);
});


module.exports = router;