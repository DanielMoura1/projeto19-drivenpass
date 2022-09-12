import { Router } from "express";
import {
    createNota,
    getnotas,
    Delete
  } from '../controllers/notas.js';

const notaRouter = Router();

notaRouter.post('/criarNota', createNota);
notaRouter.get('/getnotas/:id', getnotas);
notaRouter.delete('/deletenotas/:id', Delete);
//credenciaisRouter.get('/getCredenciais/:id', getCredenciais);
export default notaRouter ;
