import { Request, Response } from 'express';
import * as credenciaisService from '../service/cartaoService.js';
export async function createCartao(req: Request, res: Response) {
   
    const credenciais = req.body;
    const { authorization } = req.headers;
    const token:string = authorization?.replace('Bearer ', '');
    
    try{
        console.log(credenciais)
        console.log(token)
        const usuario =await credenciaisService.pegarUsuario(token)
        await credenciaisService.varificarTitulo(usuario.id,credenciais.titulo)
        await credenciaisService.criarSite(credenciais,usuario.id)
        const Nomecartao =await credenciaisService.pegarSite(usuario.id,credenciais.titulo)
        await credenciaisService.criarCredenciais(credenciais,Nomecartao.id)
        res.status(200).send('Cartão criado com sucesso!!');
    }catch(error){
        res.status(500).send(error)
    }
    
  }
  export async function getCartao(req: Request, res: Response) {
   
    const id = parseInt(req.params.id);
    const { authorization } = req.headers;
    const token:string = authorization?.replace('Bearer ', '');
    
    try{
        console.log(id)
        console.log(token)
        const usuario =await credenciaisService.pegarUsuario(token)
        const cd =await credenciaisService.pegarCartaos(id,usuario.id)
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
        const cd =await credenciaisService.pegarCartaos(id,usuario.id)
        await credenciaisService.varificarID(usuario.id,cd[0].titulo)
        console.log('oi')
        console.log(cd[0].cartao[0].id)
        await credenciaisService.Delete(id,cd[0].cartao[0].id)
        console.log(cd)
        res.status(200).send('Cartão deletadas com sucesso ');
    }catch(error){
        res.status(500).send(error)
    }
    
  }