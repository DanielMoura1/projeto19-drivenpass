import { prisma } from '../config/database.js';
import { createCredenciais } from '../controllers/credenciais.js';
import { sitesData } from '../types/credenciaisType';
import { credenciaisData } from '../types/credenciaisType';
interface cd {
    url:string,
    usuarioId:string,
    senha:string;
  }


  
export async function insert(usuario: sitesData) {

    await prisma.sites.create({ data: usuario });
}
export async function insertCd(usuario: credenciaisData) {

    await prisma.credenciais.create({ data: usuario });
}
export async function getUsuario(token:string) {
    return await prisma.usuario.findMany({ where:{
        token:token
    }});
}
export async function getsite(id:number) {
    return await prisma.sites.findMany({ where:{
        usuarioId:id
    }});
}
export async function getTitulo(id: number,titulo:string) {
    return await prisma.sites.findMany({ where:{
        usuarioId:id,
        titulo:titulo
    }});
}
export async function getCredenciais(id:number,idUsuario:number) {
    return await prisma.sites.findMany({ where:{
        id:id,
        usuarioId:idUsuario
    },
     include:{
        credenciais:true
     }
});
   
}