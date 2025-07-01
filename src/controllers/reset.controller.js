const bcrypt = require('bcryptjs');
const User = require('../models/users.models');
const generateOtp = require('../utils/generateOTP');
const emailServices = require('../services/emailServices')
console.log(emailServices.sendOtpEmail)
let tempOtpStore = {};
const otp = generateOtp();

verifyOtp = async(req,res)=>{
    const {email} = req.body;
    try {
        const isEmailExists = await User.findOne({email})
        if(isEmailExists){
            tempOtpStore[email] = otp
            emailServices.sendOtpEmail(email, otp);
            res.status(202).json({ message: `OTP sent to your email. ${email} otp: ${otp}` });
        }
        else{
            res.status(401).json({message: ""})
        }

    } catch (error) {
        console.log(`error: ${error}`)
    }
}

// verifyOtp = async (req,res) => {
//     const {email,otp} = req.body
//     try {
//         if(tempOtpStore[email] && tempOtpStore[email] == otp){
//             return res.status(202).json({message: "otp verified"})
//         }
//     } catch (error) {
//         console.log(`${error}`)
//     }
// }

resetPassword = async (req,res) => {
    const {email,otp,password} = req.body
    try {
        if(tempOtpStore[email] && tempOtpStore[email] == otp){
            const update = await User.findOne({email})
            update.password = password
            await update.save()
            res.status(200).json({message: "password changed"})
            tempOtpStore[email] == ""
        }
        else{
            res.status(404).json({message: "either email not found or otp invalid"})
        }
    } catch (error) {
        console.log(`error while resetting: ${error}`)
    }
}
module.exports = { 
    forgotPassword,
    verifyOtp,
    resetPassword
}