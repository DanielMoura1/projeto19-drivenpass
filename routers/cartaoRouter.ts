import { Router } from "express";
import {
  createCartao,
  getCartao,
  Delete
  } from '../controllers/cartao.js';
import {  usuarioSchema} from '../schemas/schemaUsuario.js';
  import { validateSchemaMiddleware } from './../middlewares/validarSchema.js';

const cartaoRouter = Router();

cartaoRouter.post('/criarCartao',createCartao);
cartaoRouter.get('/getCartao/:id',getCartao);
cartaoRouter.delete('/deleteCartao/:id',Delete);
export default cartaoRouter;
