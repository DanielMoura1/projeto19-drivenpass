import { Router } from "express";
import { createCredenciais, getCredenciais, Delete } from '../controllers/credenciais.js';
//credenciaiSchema
import { credenciaiSchema } from '../schemas/schemaCredenciaisRouter.js';
import { validateSchemaMiddleware } from './../middlewares/validarSchema.js';
var credenciaisRouter = Router();
credenciaisRouter.post('/criarCredenciaisRouter', validateSchemaMiddleware(credenciaiSchema), createCredenciais);
credenciaisRouter.get('/getCredenciais/:id', getCredenciais);
credenciaisRouter["delete"]('/deleteCd/:id', Delete);
export default credenciaisRouter;
