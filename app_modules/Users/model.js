const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const config = require('config');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        min: 3,
        max: 20,
        required: true
    },
    password: {
        type: String,
        min: 8,
        max: 16,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'theater-owner', 'customer'],
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    email: String,
    verified: Boolean
})

const User = mongoose.model('Users', userSchema)

const createNewUser = async (params) => {
    const user = await User.findOne( { mobileNo: params.mobileNo } )
    if (user) {
        throw { msg: 'User details already got registered', code: 401 }
    }
    const pwd = await encryptPwd(params.password);
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
    const user = await User.findOne( { mobileNo: params.mobileNo } )
    if(user) {
        const isValidPwd = await decryptPwd(params.password, user.password)
        if(!isValidPwd) {
             throw { msg: 'Invalid username or password', code: 401 }
        }
        return user
    }
     throw { msg: 'Invalid username or password', code: 401 }
}

const generateAuthToken = (params) => {
    const token = jwt.sign( { id: params._id, name: params.username }, config.get('jwtSecretKey'))
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

const validateNewUser = (params) => {
    const joiSchema = {
        username: Joi.string().min(3).max(20).required(),
        password: Joi.string().min(8).max(16).required(),
        role: Joi.string().valid('admin', 'theater-owner', 'customer').required(),
        mobileNo: Joi.string().min(10).required(),
        email: Joi.string().required(),
        verified: Joi.boolean().required()
    }
    const result = Joi.validate(params, joiSchema)
    if(result.error){
        return result.error.details[0].message;
    }
    return null
}

const validateLogin = (params) => {
    const joiSchema = {
        username: Joi.string().min(3).max(20).required(),
        password: Joi.string().min(8).max(16).required(),
        mobileNo: Joi.string().min(10).required()
    }
    const result = Joi.validate(params, joiSchema)
    if(result.error){
        return result.error.details[0].message;
    }
    return null
}

module.exports = {
    validateNewUser,
    validateLogin,
    createNewUser,
    authenticate,
    generateAuthToken
}