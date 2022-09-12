import * as userRepository from '../repositories/cartaoRepositories.js';
import { credenciaisData, sitesData } from '../types/credenciaisType';
import { usuarioData } from '../types/usuarioType.js';
import Cryptr from 'cryptr';
import { number } from 'joi';
interface cd {
    titulo:string,
    }
    interface cd1 {
        numeroCartao:string,
        nomeCartao:string,
        codigoSeg:string,
        dataValidade:string,
        senha:string,
        virtual:false,
        tipo:string
    }
export async function pegarUsuario(token:string) {
    console.log('???')
    if(token.length===0){
        throw { code: 'NotFound', message: 'token null' }
    }
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
        console.log('ab')
        const sites ={
            titulo:credenciais.titulo,
            usuarioId:id
        }
        console.log('ab')
        return await userRepository.insert(sites)
    
      }
      export async function pegarSite(id:number,cd:string) {
        const site =await userRepository.getsite(id,cd)
        const n =site.length-1
         return site[n]
        }
        export async function criarCredenciais(credenciais: cd1,id: number) {
            console.log('a1')
            const cryptr = new Cryptr('myTotallySecretKey');
            const senha1 = cryptr.encrypt(credenciais.senha);
            const cod =cryptr.encrypt(credenciais.codigoSeg);
            const cd ={
              numeroCartao:credenciais.numeroCartao,
              nomeCartao:credenciais.nomeCartao,
              codigoSeg:cod,
              dataValidade:credenciais.dataValidade,
              senha:senha1,
              virtual:credenciais.virtual,
              tipo:credenciais.tipo,
              nomeCartaoId:id
            }
            console.log('a2')
            return await userRepository.insertCd(cd)
            
          }
          export async function pegarCartaos(id:number,idUsuario:number) {
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