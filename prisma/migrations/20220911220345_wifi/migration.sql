-- CreateTable
CREATE TABLE "nomeWifi" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "nomeWifi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wifi" (
    "id" SERIAL NOT NULL,
    "nomeRede" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nomeWifiId" INTEGER NOT NULL,

    CONSTRAINT "wifi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "nomeWifi" ADD CONSTRAINT "nomeWifi_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wifi" ADD CONSTRAINT "wifi_nomeWifiId_fkey" FOREIGN KEY ("nomeWifiId") REFERENCES "nomeWifi"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
