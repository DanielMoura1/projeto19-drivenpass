-- CreateTable
CREATE TABLE "NomeCartao" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "NomeCartao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cartao" (
    "id" SERIAL NOT NULL,
    "numeroCartao" TEXT NOT NULL,
    "nomeCartao" TEXT NOT NULL,
    "codigoSeg" TEXT NOT NULL,
    "dataValidade" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "virtual" BOOLEAN NOT NULL DEFAULT false,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "cartao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NomeCartao" ADD CONSTRAINT "NomeCartao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
