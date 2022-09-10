import { Request, Response } from 'express';
import * as usuarioService from '../service/Testeservice.js';
import { usuarioData } from '../types/usuarioType.js';
import jwt  from 'jsonwebtoken';

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
        const secretKey = 'skljaksdj9983498327453lsldkjf';
       
        const nossoToken = jwt.sign(
            {
              email: usuario.email,
              password: usuario.senha,
            },
            secretKey,
            {
              expiresIn: '1y',
              subject: '1',
            }
          );
        console.log('?')
        console.log(nossoToken)
        res.send(nossoToken);
    }catch(error){
        res.status(500).send(error)
    }
    
  }
  