/*
  Warnings:

  - You are about to drop the column `fk_area` on the `Employee` table. All the data in the column will be lost.
  - Added the required column `id_departamento` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_fk_area_fkey";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "fk_area",
ADD COLUMN     "id_departamento" TEXT NOT NULL;
