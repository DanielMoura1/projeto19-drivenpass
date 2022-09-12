import Joi from 'joi';


export const notaSchema = Joi.object({
    titulo: Joi.string().required(),
    nota:Joi.string().max(50).required()
  });
