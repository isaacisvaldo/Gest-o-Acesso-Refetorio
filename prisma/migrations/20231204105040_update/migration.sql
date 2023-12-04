/*
  Warnings:

  - You are about to drop the `EstadoPagamento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RegistoPagamento` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RegistoPagamento" DROP CONSTRAINT "RegistoPagamento_cod_fk_fkey";

-- DropForeignKey
ALTER TABLE "RegistoPagamento" DROP CONSTRAINT "RegistoPagamento_fk_pagamento_fkey";

-- DropForeignKey
ALTER TABLE "RegistroCodAcesso" DROP CONSTRAINT "RegistroCodAcesso_registroPagamento_fk_fkey";

-- DropTable
DROP TABLE "EstadoPagamento";

-- DropTable
DROP TABLE "RegistoPagamento";

-- CreateTable
CREATE TABLE "Registro" (
    "Id" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "valor" TEXT,
    "cod_fk" INTEGER NOT NULL,
    "estado" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Registro_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_cod_fk_fkey" FOREIGN KEY ("cod_fk") REFERENCES "Employee"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistroCodAcesso" ADD CONSTRAINT "RegistroCodAcesso_registroPagamento_fk_fkey" FOREIGN KEY ("registroPagamento_fk") REFERENCES "Registro"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
