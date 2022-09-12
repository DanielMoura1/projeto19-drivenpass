/*
  Warnings:

  - Added the required column `nomeCartaoId` to the `cartao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cartao" ADD COLUMN     "nomeCartaoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "cartao" ADD CONSTRAINT "cartao_nomeCartaoId_fkey" FOREIGN KEY ("nomeCartaoId") REFERENCES "nomeCartao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
