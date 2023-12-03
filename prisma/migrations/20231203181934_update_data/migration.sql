-- CreateTable
CREATE TABLE "EstadoPagamento" (
    "Id" TEXT NOT NULL,
    "designacao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EstadoPagamento_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "RegistoPagamento" (
    "Id" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "cod_fk" INTEGER NOT NULL,
    "fk_pagamento" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RegistoPagamento_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "RegistroCodAcesso" (
    "Id" TEXT NOT NULL,
    "designacao" TEXT NOT NULL,
    "registroPagamento_fk" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RegistroCodAcesso_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EstadoPagamento_designacao_key" ON "EstadoPagamento"("designacao");

-- CreateIndex
CREATE UNIQUE INDEX "RegistroCodAcesso_designacao_key" ON "RegistroCodAcesso"("designacao");

-- AddForeignKey
ALTER TABLE "RegistoPagamento" ADD CONSTRAINT "RegistoPagamento_cod_fk_fkey" FOREIGN KEY ("cod_fk") REFERENCES "Employee"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistoPagamento" ADD CONSTRAINT "RegistoPagamento_fk_pagamento_fkey" FOREIGN KEY ("fk_pagamento") REFERENCES "EstadoPagamento"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistroCodAcesso" ADD CONSTRAINT "RegistroCodAcesso_registroPagamento_fk_fkey" FOREIGN KEY ("registroPagamento_fk") REFERENCES "RegistoPagamento"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
