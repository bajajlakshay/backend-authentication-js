const express = require('express')
const router = express.Router()
const {getUser,createUser,deleteUser,updateUser} = require('../controllers/users.controller')
const authMiddleware = require('../middleware/auth.middleware')


router.get('/user',authMiddleware,getUser)
// router.post('/create/user',createUser)
router.post('/update/user',authMiddleware,updateUser)
// router.post('/delete/user',authMiddleware,deleteUser)
module.exports = router;