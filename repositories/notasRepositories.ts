import { prisma } from '../config/database.js';
import { notaData,notaNomeData } from '../types/notasType.js';
interface nota {
    titulo:string,
    usuarioId:number;
  }
  interface nota1 {
    anotacao:string,
    siteId:number;
  }
export async function getUsuario(token:string) {
    return await prisma.usuario.findMany({ where:{
        token:token
    }});
}
export async function getTitulo(id: number,titulo:string) {
    return await prisma.notaNome.findMany({ where:{
        usuarioId:id,
        titulo:titulo
    }});
}
export async function insert(res:nota) {
    
    await prisma.notaNome.create({ data: res });
}
export async function getnota(id:number) {
    return await prisma.notaNome.findMany({ where:{
        usuarioId:id
    }});
}
export async function insertCd(usuario: nota1) {

    await prisma.notas.create({ data: usuario });
}
export async function getNotas(id:number,idUsuario:number) {
    return await prisma.notaNome.findMany({ where:{
        id:id,
        usuarioId:idUsuario
    },
     include:{
        notas:true
     }
});
   
}