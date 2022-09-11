import { Router } from "express";
import {
    createCredenciais,
    getCredenciais
  } from '../controllers/credenciais.js';

const credenciaisRouter = Router();

credenciaisRouter.post('/criarCredenciaisRouter',createCredenciais);

credenciaisRouter.get('/getCredenciais/:id', getCredenciais);
export default credenciaisRouter ;
