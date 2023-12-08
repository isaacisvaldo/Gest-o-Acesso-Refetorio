/*
  Warnings:

  - A unique constraint covering the columns `[NumIdentificacao]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "NumIdentificacao" DROP NOT NULL;

-- CreateTable
CREATE TABLE "UserLogs" (
    "Id" TEXT NOT NULL,
    "titulo" TEXT,
    "designacao" TEXT,
    "user_fk" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserLogs_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "EmployeeLogs" (
    "Id" TEXT NOT NULL,
    "titulo" TEXT,
    "designacao" TEXT,
    "employee_fk" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmployeeLogs_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_NumIdentificacao_key" ON "Employee"("NumIdentificacao");

-- AddForeignKey
ALTER TABLE "UserLogs" ADD CONSTRAINT "UserLogs_user_fk_fkey" FOREIGN KEY ("user_fk") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeLogs" ADD CONSTRAINT "EmployeeLogs_employee_fk_fkey" FOREIGN KEY ("employee_fk") REFERENCES "Employee"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;
