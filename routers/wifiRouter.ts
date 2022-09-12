import { Router } from "express";
import {
    createCredenciais,
    getWifi,
    Delete
  } from '../controllers/wifi.js';
  import { wifiSchema } from '../schemas/schemaWifi.js';
  import { validateSchemaMiddleware } from './../middlewares/validarSchema.js';

const wifiRouter = Router();

wifiRouter.post('/criarWifi',validateSchemaMiddleware(wifiSchema), createCredenciais);
wifiRouter.get('/getwifi/:id', getWifi);
wifiRouter.delete('/deletewifi/:id', Delete);
//credenciaisRouter.get('/getCredenciais/:id', getCredenciais);
export default wifiRouter ;
