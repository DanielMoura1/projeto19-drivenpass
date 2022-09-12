import Joi from 'joi';


export const credenciaiSchema = Joi.object({
    titulo: Joi.string().required(),
    url:Joi.string().required(),
    usuario:Joi.string().required(),
    senha:Joi.string().required()
  });
