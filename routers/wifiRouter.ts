import { Router } from "express";
import {
    createCredenciais,
    getWifi,
    Delete
  } from '../controllers/wifi.js';

const wifiRouter = Router();

wifiRouter.post('/criarWifi', createCredenciais);
wifiRouter.get('/getwifi/:id', getWifi);
wifiRouter.delete('/deletewifi/:id', Delete);
//credenciaisRouter.get('/getCredenciais/:id', getCredenciais);
export default wifiRouter ;
