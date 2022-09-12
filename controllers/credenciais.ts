import { Request, Response } from 'express';
import * as credenciaisService from '../service/credenciaisService.js';
import { sitesData } from '../types/credenciaisType.js';
interface cd {
    titulo:string,
    url:string,
    usuario:string,
    senha:string;
  }
export async function createCredenciais(req: Request, res: Response) {
   
    const credenciais: cd = req.body;
    const { authorization } = req.headers;
    const token:string = authorization?.replace('Bearer ', '');
    
    try{
        console.log(credenciais)
        console.log(token)
        const usuario =await credenciaisService.pegarUsuario(token)
        await credenciaisService.varificarTitulo(usuario.id,credenciais.titulo)
        await credenciaisService.criarSite(credenciais,usuario.id)
        const site =await credenciaisService.pegarSite(usuario.id,credenciais.titulo)
        await credenciaisService.criarCredenciais(credenciais,site.id)
        res.status(200).send('Credenciais criadas com sucesso!!');
    }catch(error){
        res.status(500).send(error)
    }
    
  }
  export async function getCredenciais(req: Request, res: Response) {
   
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
        const cd =await credenciaisService.pegarCredenciais(id,usuario.id)
        await credenciaisService.varificarID(usuario.id,cd[0].titulo)
        console.log('oi')
        console.log(cd[0].credenciais[0].id)
        await credenciaisService.Delete(id,cd[0].credenciais[0].id)
        console.log(cd)
        res.status(200).send('Credenciais deletadas com sucesso ');
    }catch(error){
        res.status(500).send(error)
    }
    
  }