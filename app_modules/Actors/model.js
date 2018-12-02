const mongoose = require('mongoose');
const Joi = require('joi');

const schema = new mongoose.Schema({
    name: String,
    nic: String,
    photo: String,
    dob: String,
    born: String,
    about: String
})

const Actor = mongoose.model('Actor', schema)

const addActor = async (params) => {
    const actor = new Actor({
        name: params.actor.name,
        nic: params.actor.nic,
        photo: params.actor.photo,
        dob: params.actor.dob,
        born: params.actor.born,
        about: params.actor.about
    })
    return await actor.save()
}

const validate = (data) => {
    const joiSchema = {
        name: Joi.string().min(3).max(100).required(),
        nic: Joi.string().min(3).required(),
        photo: Joi.string().required(),
        dob: Joi.string().required(),
        born: Joi.string().required(),
        about: Joi.string().min(100).required()
    }
    const result = Joi.validate(data, joiSchema)
    if(result.error){
        return result.error
    }
    return null
}

const listActors = async () => {
    return Actor.find()
}

module.exports = {
    validate,
    addActor,
    listActors
}