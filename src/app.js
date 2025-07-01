const express = require('express')
const userRouter = require('./routes/users.routes')
const authRouter = require('./routes/auth.routes')
const resetRouter = require('./routes/reset.routes')
const app = express()

app.use(express.json())

app.use('/api/v1',userRouter)
app.use('/',authRouter)
app.use('/reset',resetRouter)
module.exports = app

