import { prisma } from '../config/database.js';
interface nomewifi {
    titulo:string,
    usuarioId:number
  }
  interface wifi {
    nomeRede:string,
    senha:string,
    nomeWifiId:number
}
export async function getUsuario(token:string) {
    return await prisma.usuario.findMany({ where:{
        token:token
    }});
}
export async function insert(usuario: nomewifi) {

    await prisma.nomeWifi.create({ data: usuario });
}
export async function getsite(id:number) {
    return await prisma.nomeWifi.findMany({ where:{
        usuarioId:id
    }});
}
export async function insertCd(usuario: wifi) {

    await prisma.wifi.create({ data: usuario });
}
export async function getCredenciais(id:number,idUsuario:number) {
    return await prisma.nomeWifi.findMany({ where:{
        id:id,
        usuarioId:idUsuario
    },
     include:{
        wifi:true
     }
});
   
}
export async function getId(id: number) {
    console.log('id :'+id)
    console.log(id)
    return await prisma.wifi.findMany({ where:{
        id:id,
    }});
}
export async function deletar(id:number,idUsuario:number) {
    
    await prisma.wifi.delete({
        where: {
        id: idUsuario,
        },
      })
     await prisma.nomeWifi.delete({
        where: {
          id: id,
        },
      })
    
}