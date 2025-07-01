const mongoose = require('mongoose')
const config = require('./keys.config')

const connectDB= async ()=>{
    try{
        await mongoose.connect(config.mongoUri,{
            dbName: config.mongoDBName,
            
        })
        console.log("we are connected")
    }
    catch(err){
        throw err
    }
}

module.exports = connectDB