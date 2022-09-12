import { prisma } from '../config/database.js';
interface cd {
    titulo:string,
    usuarioId:number
  }
interface cd2{
    numeroCartao:string,
    nomeCartao:string,
    codigoSeg:string,
    dataValidade:string,
    senha:string,
    virtual:boolean,
    tipo:string,
    nomeCartaoId:number
}
export async function getUsuario(token:string) {
    return await prisma.usuario.findMany({ where:{
        token:{endsWith:token}
    }});
}   
export async function getTitulo(id: number,titulo:string) {
    return await prisma.nomeCartao.findMany({ where:{
        titulo:titulo,
        usuarioId:id
        
    }});
}
export async function insert(usuario: cd) {
    console.log('aC')
    await prisma.nomeCartao.create({ data: usuario });
}
export async function getsite(id:number,cd:string) {
    return await prisma.nomeCartao.findMany({ where:{
        usuarioId:id,
        titulo:cd
    }});
}
export async function insertCd(usuario: cd2) {
    console.log(usuario)
    await prisma.cartao.create({ data: usuario });
}
export async function getCredenciais(id:number,idUsuario:number) {
    return await prisma.nomeCartao.findMany({ where:{
        id:id,
        usuarioId:idUsuario
    },
     include:{
        cartao:true
     }
});
   
}
export async function getId(id: number) {
    return await prisma.cartao.findMany({ where:{
        id:id,
    }});
}
export async function deletar(id:number,idUsuario:number) {
    
    await prisma.cartao.delete({
        where: {
        id: idUsuario,
        },
      })
     await prisma.nomeCartao.delete({
        where: {
          id: id,
        },
      })
    
}