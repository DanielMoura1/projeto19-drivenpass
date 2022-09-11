import { Request, Response } from 'express';
import * as usuarioService from '../service/usuarioService.js';
import { usuarioData } from '../types/usuarioType.js';


export async function createUsuario(req: Request, res: Response) {
    const usuario: usuarioData = req.body;

    try{
        await usuarioService.varificarEmail(usuario)
        await usuarioService.criarUsuario(usuario);
        res.status(200).send('Pergunta criada com sucesso!!');
    }catch(error){
        res.status(500).send(error)
    }
    
  }
  export async function loginUsuario(req: Request, res: Response) {
    const usuario: usuarioData = req.body;

    try{
      await usuarioService.varificarLogin(usuario)
      const nossoToken = await usuarioService.criarToken(usuario)
      await usuarioService.updateUsuario(usuario,nossoToken)
        res.send(nossoToken);
    }catch(error){
        res.status(500).send(error)
    }
    
  }
  