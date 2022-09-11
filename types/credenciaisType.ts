import { sites } from '@prisma/client';
import { credenciais } from '@prisma/client';

export type sitesData = Omit<sites, 'id'| 'siteId'>;
export type credenciaisData = Omit<credenciais, 'id'>;