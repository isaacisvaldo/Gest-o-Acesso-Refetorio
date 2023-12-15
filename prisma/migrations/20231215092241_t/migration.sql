/*
  Warnings:

  - You are about to drop the column `fk_grupos` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_fk_grupos_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "fk_grupos",
ADD COLUMN     "fk_grupo" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_fk_grupo_fkey" FOREIGN KEY ("fk_grupo") REFERENCES "Grupos"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
