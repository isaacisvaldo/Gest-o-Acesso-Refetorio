-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_fk_perfil_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "fk_perfil" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_fk_perfil_fkey" FOREIGN KEY ("fk_perfil") REFERENCES "Perfil"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
