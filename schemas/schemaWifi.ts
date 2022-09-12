import Joi from 'joi';

export const wifiSchema = Joi.object({
    titulo: Joi.string().required(),
    nomeRede:Joi.string().required(),
    senha:Joi.string().required()
  });
 