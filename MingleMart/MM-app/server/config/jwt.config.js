const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY


module.exports.authenticate = (req, res, next) => {
    // ! req.cookies.userToken 
    // console.log('LINE 7', req.cookies)
    jwt.verify(req.cookies.userToken, SECRET, (err,payload) => {
        if(err){
            res.status(401).json({verified: false})
        }
        else{
            // console.log('LINE 13', payload);
            next()
        }
    })
}