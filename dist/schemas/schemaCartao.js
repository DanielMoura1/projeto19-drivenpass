import Joi from 'joi';
export var cartaoSchema = Joi.object({
    titulo: Joi.string().required(),
    numeroCartao: Joi.string().required(),
    nomeCartao: Joi.string().required(),
    codigoSeg: Joi.string().required(),
    dataValidade: Joi.string().required(),
    senha: Joi.string().required(),
    virtual: Joi.boolean(),
    tipo: Joi.string().valid('credito', 'debito', 'ambos')
});
