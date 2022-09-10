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