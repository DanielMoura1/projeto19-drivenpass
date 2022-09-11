import { notaNome } from '@prisma/client';
import { notas} from '@prisma/client';

export type notaNomeData = Omit<notaNome, 'id'>;
export type notaData =Omit<notas, 'id'>;