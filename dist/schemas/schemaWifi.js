import Joi from 'joi';
export var wifiSchema = Joi.object({
    titulo: Joi.string().required(),
    nomeRede: Joi.string().required(),
    senha: Joi.string().required()
});
