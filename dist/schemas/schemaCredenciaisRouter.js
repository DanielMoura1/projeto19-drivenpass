import Joi from 'joi';
export var credenciaiSchema = Joi.object({
    titulo: Joi.string().required(),
    url: Joi.string().required(),
    usuario: Joi.string().required(),
    senha: Joi.string().required()
});
