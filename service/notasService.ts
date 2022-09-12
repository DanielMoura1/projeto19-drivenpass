import * as userRepository from '../repositories/notasRepositories.js';
import { notaData,notaNomeData} from '../types/notasType.js';
import Cryptr from 'cryptr';
interface nota {
    titulo:string,
    nota:string;
  }
  interface nota1 {
    anotacao:string,
    siteId:number;
  }
export async function pegarUsuario(token:string) {
    console.log('serv')
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
export async function criarnotaNome(nota: nota,id: number) {
    const sites ={
      titulo:nota.titulo,
      usuarioId:id
    }
    console.log('tentando criar')
    return await userRepository.insert(sites)

  }  
  export async function pegarnota(id:number,cd:string) {
    console.log('site')
    const site =await userRepository.getnota(id,cd)
    console.log(site)
    console.log('teste')
    const n =site.length-1
     return site[n]
   
    }  
    export async function criarNota(credenciais: nota,id: number) {
        console.log('aqui')
       
        
        const cd ={
          anotacao:credenciais.nota,
          siteId:id
        }
        console.log('aqui 1')
        return await userRepository.insertCd(cd)
        
      }
      export async function pegarnotas(id:number,idUsuario:number) {
        const usuario =await userRepository.getNotas(id,idUsuario)
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
    