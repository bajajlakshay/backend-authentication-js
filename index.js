const app = require('./src/app')
const connectDB = require('./src/config/db.config')
const config = require('./src/config/keys.config')


connectDB().then(()=>{
    app.listen(config.port,()=>{
        console.log(`listening at ${config.port}`)
    })
})