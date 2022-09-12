import { Router } from "express";
import {
    createCredenciais,
    getCredenciais,
    Delete
  } from '../controllers/credenciais.js';

const credenciaisRouter = Router();

credenciaisRouter.post('/criarCredenciaisRouter',createCredenciais);

credenciaisRouter.get('/getCredenciais/:id', getCredenciais);
credenciaisRouter.delete('/deleteCd/:id', Delete);
export default credenciaisRouter ;
