-- AlterTable
ALTER TABLE "User" ADD COLUMN     "fk_grupos" TEXT;

-- CreateTable
CREATE TABLE "Grupos" (
    "Id" TEXT NOT NULL,
    "designacao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Grupos_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Grupos_designacao_key" ON "Grupos"("designacao");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_fk_grupos_fkey" FOREIGN KEY ("fk_grupos") REFERENCES "Grupos"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
