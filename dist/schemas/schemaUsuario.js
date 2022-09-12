import Joi from 'joi';
export var usuarioSchema = Joi.object({
    email: Joi.string().required(),
    senha: Joi.string().length(10).required(),
    token: Joi.string().optional() // Joi.allow(null)
});
