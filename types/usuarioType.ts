import { usuario  } from '@prisma/client';
export type usuarioData = Omit<usuario, 'id'>;