import * as userRepository from '../repositories/credenciaisRepositories.js';
import { credenciaisData, sitesData } from '../types/credenciaisType';
import { usuarioData } from '../types/usuarioType.js';
import Cryptr from 'cryptr';
import jwt  from 'jsonwebtoken';

interface cd {
  titulo:string,
  url:string,
  usuario:string,
  senha:string;
}
//const decryptedString = cryptr.decrypt(encryptedString);


export async function pegarUsuario(token:string) {
  const usuario =await userRepository.getUsuario(token)
   return usuario[0]
  }
  export async function varificarTitulo(id: number,titul:string) {

    const titulo= await userRepository.getTitulo(id,titul)
    console.log(titulo)
    if(titulo.length>0){
        throw { code: 'NotFound', message: 'titulo invalido' }
    }
   
}
  export async function criarSite(credenciais: cd,id: number) {
    const sites ={
      titulo:credenciais.titulo,
      usuarioId:id
    }
    return await userRepository.insert(sites)

  }
  export async function pegarSite(id:number) {
    const site =await userRepository.getsite(id)
     return site[0]
    }
  export async function criarCredenciais(credenciais: cd,id: number) {
    const cryptr = new Cryptr('myTotallySecretKey');
    const encryptedString = cryptr.encrypt(credenciais.senha);
    
    const cd ={
      url:credenciais.url,
      usuario:credenciais.usuario,
      senha:encryptedString,
      siteId:id
    }
    return await userRepository.insertCd(cd)
    
  }
  export async function pegarCredenciais(id:number,idUsuario:number) {
    const usuario =await userRepository.getCredenciais(id,idUsuario)
    if(usuario.length===0){
      throw { code: 'NotFound', message: 'id invalido' }
  }
     return usuario
    }