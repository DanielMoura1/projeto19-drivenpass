-- CreateTable
CREATE TABLE "notaNome" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "notaNome_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notas" (
    "id" SERIAL NOT NULL,
    "anotacao" TEXT NOT NULL,
    "siteId" INTEGER NOT NULL,

    CONSTRAINT "notas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "notaNome" ADD CONSTRAINT "notaNome_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "notas" ADD CONSTRAINT "notas_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "notaNome"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
