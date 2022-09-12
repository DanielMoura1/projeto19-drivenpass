import * as userRepository from '../repositories/wifiRepositories.js';
import Cryptr from 'cryptr';
interface nomewifi {
    titulo:string,
    usuarioId:number
}
interface wifi {
    nomeRede:string,
    senha:string,
    nomeWifiId:number
}
interface wi {
    titulo:string,
    nomeRede:string,
    senha:string;
  }

export async function pegarUsuario(token:string) {
    const usuario =await userRepository.getUsuario(token)
     return usuario[0]
}
export async function criarSite(credenciais: wi,id: number) {
    const sites ={
      titulo:credenciais.titulo,
      usuarioId:id
    }
    const res= await userRepository.insert(sites)
    console.log('teste e')
    console.log(res)
    return res
  }
  export async function pegarSite(id:number) {
    const site =await userRepository.getsite(id)
    console.log('res')
    console.log(site)
    const n =site.length-1
     return site[n]
}
export async function criarCredenciais(credenciais: wi,id: number) {
    const cryptr = new Cryptr('myTotallySecretKey');
    const encryptedString = cryptr.encrypt(credenciais.senha);
    
    const cd ={
      nomeRede:credenciais.nomeRede,
      senha:credenciais.senha,
      nomeWifiId:id
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
export async function varificarID(id: number,titul:string) {

  const titulo= await userRepository.getId(id)
  console.log(titulo)
  if(titulo.length===0){
      throw { code: 'NotFound', message: 'id invalido' }
  }
 
}
export async function Delete(idsite:number,idcd:number) {
  return await userRepository.deletar(idsite,idcd)
  }
