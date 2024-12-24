require("dotenv").config();
const jwt = require("jsonwebtoken");
const verifyToken =  (req,res) =>{
    return new Promise((resolve,reject)=>{
        const authHeader = req.headers['authorization']; // Get the Authorization header
        if (!authHeader) {
            reject(false);
        }
    
        // Extract token from header (e.g., "Bearer <token>")
        const token = authHeader.split(' ')[1];
        if (!token) {
            reject(false);
        }
    
        // Verify the token
        jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
            if (err) {
                reject(false);
            }
    
            // Add decoded data to the request object
            if(decoded.userType != 'admin'){
                reject(false);
            }
            resolve(true);
        });
    });
}
module.exports = {
    verifyToken
}