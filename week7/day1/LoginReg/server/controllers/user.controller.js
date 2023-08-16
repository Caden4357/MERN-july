const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY

module.exports = {
    registerUser: async (req, res) => {
        try{
            // ! Check if the user already exists 
            const potentialUser = await User.findOne({email:req.body.email})
            if (potentialUser){
                res.status(400).json({message:'This email already exists please log in'})
            }
            else{
                const newUser = await User.create(req.body)
                const userToken = jwt.sign({_id: newUser._id, email:newUser.email}, SECRET, {expiresIn:'2h'})
                console.log(userToken);
                res.status(201).cookie('userToken', userToken, {httpOnly:true}).json(newUser)
            }
        }
        catch(err){
            console.log(err);
            res.status(400).json({error: err})
        }
    }
}