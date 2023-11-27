-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "Funcao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);
