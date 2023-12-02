-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_fk_area_fkey" FOREIGN KEY ("fk_area") REFERENCES "Area"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
