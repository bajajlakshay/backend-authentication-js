const User = require('../models/users.models')

getUser = async (req,res)=>{
    try {
        const users = await User.find().select("-password");
        res.json(users)
    } catch (error) {
        console.log(`error in fetching users: ${error}`)
    }
}

createUser = async (req,res)=>{
    try {
        const {username,email,password} = req.body;
        const createUser = new User({username,email,password})
        await createUser.save();
        res.status(202).json(createUser)
    }
    catch (error) {
        throw error
    }
}
deleteUser = async(req,res)=>{
    try{
        const {id} = req.body;
        const deleteUser = await User.findByIdAndDelete(id)
        res.status(200).json(deleteUser)
    }
    catch(error){
        throw error
    }
}

updateUser = async(req,res)=>{
    try{
        const {id,username,email,firstname,lastname} = req.body
        const updateUser = await User.findByIdAndUpdate(id,{username,email})
        res.status(202)
    }
    catch(error){
        throw error
    }
}


module.exports = {getUser,createUser,deleteUser,updateUser}