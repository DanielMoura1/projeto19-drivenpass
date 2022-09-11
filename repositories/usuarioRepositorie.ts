import { prisma } from '../config/database.js';
import { usuarioData } from '../types/usuarioType.js';

export async function insert(usuario: usuarioData) {
    await prisma.usuario.create({ data: usuario });
}
export async function getEmail(usuario: usuarioData) {
    return await prisma.usuario.findMany({ where:{
        email:usuario.email
    }});
}
export async function updateToken(id:number,token:string) {
    await prisma.usuario.update({
        where: {
          id: id
        },
        data: {
          token: token
        }
      })
}
