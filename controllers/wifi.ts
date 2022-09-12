import { Request, Response } from 'express';
import * as credenciaisService from '../service/wifiService.js';
export async function createCredenciais(req: Request, res: Response) {
    interface wi {
        titulo:string,
        nomeRede:string,
        senha:string;
      }
    const credenciais: wi = req.body;
    const { authorization } = req.headers;
    const token:string = authorization?.replace('Bearer ', '');
    
    try{
        console.log(credenciais)
        console.log(token)
        const usuario =await credenciaisService.pegarUsuario(token)
        await credenciaisService.criarSite(credenciais,usuario.id)
        const nomewifi =await credenciaisService.pegarSite(usuario.id)
        console.log(nomewifi)
        await credenciaisService.criarCredenciais(credenciais,nomewifi.id)
        res.status(200).send('Senha wifi criada com sucesso!!');
    }catch(error){
        res.status(500).send(error)
    }
    
  }
  export async function getWifi(req: Request, res: Response) {
   
    const id = parseInt(req.params.id);
    const { authorization } = req.headers;
    const token:string = authorization?.replace('Bearer ', '');
    
    try{
        console.log(id)
        console.log(token)
        const usuario =await credenciaisService.pegarUsuario(token)
        const cd =await credenciaisService.pegarCredenciais(id,usuario.id)
        console.log(cd)
        res.send(cd);
    }catch(error){
        res.status(500).send(error)
    }
    
  }
  export async function Delete(req: Request, res: Response) {
   
    const id = parseInt(req.params.id);
    const { authorization } = req.headers;
    const token:string = authorization?.replace('Bearer ', '');
    
    try{
        console.log(id)
        console.log(token)
        const usuario =await credenciaisService.pegarUsuario(token)
        console.log('1')
        const cd =await credenciaisService.pegarCredenciais(id,usuario.id)
        console.log('2')
        await credenciaisService.varificarID(id,cd[0].titulo)
        console.log('oi')
        console.log(cd)
        console.log('wifi')
        await credenciaisService.Delete(id,cd[0].wifi[0].id)
        console.log(cd)
        res.status(200).send('Senha wifi deletada com sucesso !!');
    }catch(error){
        res.status(500).send(error)
    }
    
  }