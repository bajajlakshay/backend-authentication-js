const express = require('express')
const router = express.Router()
const {forgotPassword,verifyOtp,resetPassword} = require('../controllers/reset.controller')
const authMiddleware = require('../middleware/auth.middleware')

router.post("/forgot-password",authMiddleware,forgotPassword)
router.post("/verify-otp",authMiddleware,verifyOtp)
router.post("/reset-password",authMiddleware,resetPassword)

module.exports = router