/*
  Warnings:

  - You are about to drop the `NomeCartao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "NomeCartao" DROP CONSTRAINT "NomeCartao_usuarioId_fkey";

-- DropTable
DROP TABLE "NomeCartao";

-- CreateTable
CREATE TABLE "nomeCartao" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "nomeCartao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "nomeCartao" ADD CONSTRAINT "nomeCartao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
