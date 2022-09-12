import { Router } from "express";
import { createCartao, getCartao, Delete } from '../controllers/cartao.js';
import { cartaoSchema } from '../schemas/schemaCartao.js';
import { validateSchemaMiddleware } from './../middlewares/validarSchema.js';
var cartaoRouter = Router();
cartaoRouter.post('/criarCartao', validateSchemaMiddleware(cartaoSchema), createCartao);
cartaoRouter.get('/getCartao/:id', getCartao);
cartaoRouter["delete"]('/deleteCartao/:id', Delete);
export default cartaoRouter;
