import { Request, Response } from 'express';
import * as notasService from '../service/notasService.js';
import { notaData,notaNomeData } from '../types/notasType.js';

interface nota {
    titulo:string,
    nota:string;
  }
export async function createNota(req: Request, res: Response) {

    const nota:nota = req.body;
    const { authorization } = req.headers;
    const token:string = authorization?.replace('Bearer ', '');

    try{
        const usuario =await notasService.pegarUsuario(token)
        await notasService.varificarTitulo(usuario.id,nota.titulo)
        await notasService.criarnotaNome(nota,usuario.id)
        const notaNome =await notasService.pegarnota(usuario.id,nota.titulo)
     
        console.log(notaNome.id)
        await notasService.criarNota(nota,notaNome.id)
        res.status(200).send('Notas criada com sucesso!!');
    }catch(error){
        res.status(500).send(error)
    }
    
  }
  export async function getnotas(req: Request, res: Response) {
   
    const id = parseInt(req.params.id);
    const { authorization } = req.headers;
    const token:string = authorization?.replace('Bearer ', '');
    
    try{
        const usuario =await notasService.pegarUsuario(token)
        const cd =await notasService.pegarnotas(id,usuario.id)
        console.log(cd)
        res.send(cd);
    }catch(error){
        res.status(500).send(error)
    }
    
  }
  export async function Delete(req: Request, res: Response) {
   
    const id = parseInt(req.params.id);
    console.log(id)
    const { authorization } = req.headers;
    const token:string = authorization?.replace('Bearer ', '');
    
    try{
        console.log(id)
        console.log(token)
        const usuario =await notasService.pegarUsuario(token)
        const cd =await notasService.pegarnotas(id,usuario.id)
        await notasService.varificarID(usuario.id,cd[0].titulo)
        console.log('oi')
        await notasService.Delete(id,cd[0].notas[0].id)
        console.log(cd)
        res.status(200).send('Notas deletadas com sucesso !!');
    }catch(error){
        res.status(500).send(error)
    }
    
  }
  