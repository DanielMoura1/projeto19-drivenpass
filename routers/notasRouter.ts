import { Router } from "express";
import {
    createNota,
    getnotas
  } from '../controllers/notas.js';

const notaRouter = Router();

notaRouter.post('/criarNota', createNota);
notaRouter.get('/getnotas/:id', getnotas);
//credenciaisRouter.get('/getCredenciais/:id', getCredenciais);
export default notaRouter ;
