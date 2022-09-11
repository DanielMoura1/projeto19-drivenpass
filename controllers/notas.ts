import { Request, Response } from 'express';
import * as notasService from '../service/notasService.js';
import { notaData,notaNomeData } from '../types/notasType.js';

interface nota {
    titulo:string,
    nota:string;
  }
export async function createNota(req: Request, res: Response) {
  console.log('a')
    const nota:nota = req.body;
    console.log(nota)
    const { authorization } = req.headers;
    const token:string = authorization?.replace('Bearer ', '');

    try{
        const usuario =await notasService.pegarUsuario(token)
        console.log(usuario.id)
        await notasService.varificarTitulo(usuario.id,nota.titulo)
        console.log('2')
        await notasService.criarnotaNome(nota,usuario.id)
        console.log('3')
        const notaNome =await notasService.pegarnota(usuario.id)
        console.log('a')
     
        console.log(notaNome.id)
        console.log('b')
        await notasService.criarNota(nota,notaNome.id)
        res.status(200).send('Pergunta criada com sucesso!!');
    }catch(error){
        res.status(500).send(error)
    }
    
  }
  export async function getnotas(req: Request, res: Response) {
   
    const id = parseInt(req.params.id);
    const { authorization } = req.headers;
    const token:string = authorization?.replace('Bearer ', '');
    
    try{
        console.log(id)
        console.log(token)
        const usuario =await notasService.pegarUsuario(token)
        const cd =await notasService.pegarnotas(id,usuario.id)
        //const usuario =await credenciaisService.pegarUsuario(token)*
        //const cd =await credenciaisService.pegarCredenciais(id,usuario.id)
        console.log(cd)
        res.status(200).send('Pergunta criada com sucesso!!');
    }catch(error){
        res.status(500).send(error)
    }
    
  }
  