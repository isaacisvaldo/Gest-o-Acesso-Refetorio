-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_fk_area_fkey";

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "fk_area" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_fk_area_fkey" FOREIGN KEY ("fk_area") REFERENCES "Area"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
