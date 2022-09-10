import { Router } from "express";
import {
    createUsuario
  } from '../controllers/usuario.js';
import {  usuarioSchema} from '../schemas/schemaUsuario.js';
  import { validateSchemaMiddleware } from './../middlewares/validarSchema.js';

const authRouter = Router();

authRouter.post('/criarUser',validateSchemaMiddleware(usuarioSchema),createUsuario);

export default authRouter;''

