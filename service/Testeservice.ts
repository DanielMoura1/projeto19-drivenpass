import * as userRepository from '../repositories/usuarioRepositorie.js';
import { usuarioData } from '../types/usuarioType.js';
import bcrypt from 'bcrypt';

export async function criarUsuario(usuario: usuarioData) {
    usuario.senha= bcrypt.hashSync(usuario.senha, 10);
   return await userRepository.insert(usuario);
  }
export async function varificarEmail(usuario: usuarioData) {
    const email= await userRepository.getEmail(usuario)
    console.log(email)
    if(email.length>0){
        throw { code: 'NotFound', message: 'email invalido' }
    }
   
}
export async function varificarLogin(usuario: usuarioData) {
    const email= await userRepository.getEmail(usuario)
    console.log(email.length)
    if(email.length===0){
        throw { code: 'NotFound', message: 'email ou senha invalida' }
    }
    const senha= bcrypt.compareSync(usuario.senha,  email[0].senha)
    if(!senha){
        console.log('senha invalida')
        throw { code: 'NotFound', message: 'email ou senha invalida' }
      }
    
   
}