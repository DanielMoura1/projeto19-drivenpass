import Joi from 'joi';
import { usuarioData } from '../types/usuarioType.js';

export const usuarioSchema = Joi.object<usuarioData>({
    email: Joi.string().required(),
    senha:Joi.string().length(10).required(), 
    token:Joi.string().optional()// Joi.allow(null)
  });
  