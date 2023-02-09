const Joi = require('joi');


const locationSchema = Joi.object({
    id: Joi.string().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    route: Joi.string().required(),
    availableSeat: Joi.string().required(),
    serial: Joi.number().integer().required(),

});


 module.exports = locationSchema;