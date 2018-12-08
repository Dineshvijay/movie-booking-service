const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
    email: String,
    mobileNo: String,
    verified: Boolean
})

const User = mongoose.model('Users', userSchema)

const createNewUser = async (params) => {
    const user = await User.findOne( {mobileNo: params.mobileNo} )
    if (user) {
        return Error('User details already got registered')
    }
    const pwd = await encryptPwd(params.pwd);
    const newUser = new User({
        username: params.username,
        password: pwd,
        role: params.role,
        email: params.email,
        mobileNo: params.mobileNo,
        verified: params.verified
    })
    return await newUser.save()
}

const authenticate = async (params) => {
    const user = await User.findOne( {mobileNo: params.mobileNo} )
    if(user) {
        const isValidPwd = await decryptPwd(params.pwd, user.password)
        if(!isValidPwd) {
            return Error("Inavlid user or password")
        }
        return user
    }
    return Error("Inavlid user or password")
}

const generateAuthToken = (params) => {
    const token = jwt.sign( { id: params._id, name: params.username }, 'secretKey')
    return token
}

const decryptPwd = async (pwd, encrytedPwd) => {
    const result = await bcrypt.compare(pwd, encrytedPwd)
    return result
}

const encryptPwd = async (pwd) => {
    const salt = await bcrypt.genSalt(10)
    const result = await bcrypt.hash(pwd, salt);
    return result
}

module.exports = {
    createNewUser,
    authenticate,
    generateAuthToken
}