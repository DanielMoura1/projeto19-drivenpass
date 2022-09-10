import { Router } from "express";
import {
    createUsuario,
    loginUsuario
  } from '../controllers/usuario.js';
import {  usuarioSchema} from '../schemas/schemaUsuario.js';
  import { validateSchemaMiddleware } from './../middlewares/validarSchema.js';

const authRouter = Router();

authRouter.post('/criarUser',validateSchemaMiddleware(usuarioSchema),createUsuario);
authRouter.post('/login',validateSchemaMiddleware(usuarioSchema),loginUsuario);
export default authRouter;''

