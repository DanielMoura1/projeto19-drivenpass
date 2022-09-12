import { Router } from "express";
import { createNota, getnotas, Delete } from '../controllers/notas.js';
// notaSchema
import { notaSchema } from '../schemas/scremaNotas.js';
import { validateSchemaMiddleware } from './../middlewares/validarSchema.js';
var notaRouter = Router();
notaRouter.post('/criarNota', validateSchemaMiddleware(notaSchema), createNota);
notaRouter.get('/getnotas/:id', getnotas);
notaRouter["delete"]('/deletenotas/:id', Delete);
//credenciaisRouter.get('/getCredenciais/:id', getCredenciais);
export default notaRouter;
