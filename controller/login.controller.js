require("dotenv").config();
const dbService = require("../services/db.service")
const jwt = require("jsonwebtoken");

const secretKey = process.env.JWTSECRET;

const login = async (req,res,schema) =>{
    try{
        const data = req.body;
        const query = {
            email : data.email
        }
        const dbRes = await dbService.findByQuery(query,schema);
        if(dbRes.length > 0){
            if(dbRes[0].password == data.password){
                const payload = {
                    _id: dbRes[0]._id.toString(),
                    name: dbRes[0].name,
                    email: dbRes[0].email,
                    profile : dbRes[0].profile,
                    userType : 'admin'
                };
                const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
                res.status(200).json({
                    message : 'login success !',
                    isLoged : true,
                    token : token
                });
            }else{
                res.status(401).json({
                    message : 'Wrong credential !',
                    isLoged : false,
                });
            }
        }else{
            res.status(401).json({
                message : 'Wrong credential !',
                isLoged : false,
            });
        }
    }catch(err){
        res.status(424).json({
            message : 'Unable to create data !',
            error : err
        })
    }
}

module.exports = {
    login
}