/*
  Warnings:

  - Made the column `NumIdentificacao` on table `Employee` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Employee_NumIdentificacao_key";

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "NumIdentificacao" SET NOT NULL;
