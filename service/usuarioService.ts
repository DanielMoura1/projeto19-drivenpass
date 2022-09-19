import * as userRepository from '../repositories/usuarioRepositorie.js';
import { usuarioData } from '../types/usuarioType.js';
import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';
import Cryptr from 'cryptr';

export async function criarUsuario(usuario: usuarioData) {
  const cryptr = new Cryptr('myTotallySecretKey');
  const encryptedString = cryptr.encrypt('bacon');
  const decryptedString = cryptr.decrypt(encryptedString);
    usuario.senha= bcrypt.hashSync(usuario.senha, 10);
   return await userRepository.insert(usuario);
  }
export async function varificarEmail(usuario: usuarioData) {

    const email= await userRepository.getEmail(usuario)
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
export async function criarToken(usuario: usuarioData) {
    const secretKey = 'skljaksdj9983498327453lsldkjf';
       
    const nossoToken:string = jwt.sign(
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
    return nossoToken
}
export async function updateUsuario(usuario: usuarioData,token:string) {
  const id= await userRepository.getEmail(usuario)
 await userRepository.updateToken(id[0].id, token)
}