const User = require('../models/users.models')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const config = require('../config/keys.config');

register = async (req,res)=>{
    try {
        const {username,email,password} = req.body;
        const emailExists = await User.findOne({email})
        const usernameExists = await User.findOne({username})

        if(emailExists){
            res.status(401).json({message: "email already exits, login instead"})
        }
        else if(usernameExists){
            res.status(401).json({message: "username already exits, Try another username"})
        }
        else{
        const createUser = new User({username,email,password})
        createUser.save();
        res.status(200).json({message: "user created"})
        }
    }
    catch (error) {
        throw error
    }
}

login = async (req,res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email})
        if(!user){
            res.status(404).json({message: "email not found"})
        }
        else{
            const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch){
                res.status(400).json({message: "password incorrect"})
            }
            else{
                const token = jwt.sign({userId:user._id},config.JWT_SECRETE,{expiresIn:"1d"})
                res.status(202).json({token,user:{username: user.username,email:user.email}})
            }
        }
    } catch (error) {
        console.log(`error while login error: ${error}`)
    }
}



module.exports = {
    register,
    login,
}