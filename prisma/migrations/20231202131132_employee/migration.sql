-- CreateTable
CREATE TABLE "AreaCategoria" (
    "Id" TEXT NOT NULL,
    "designacao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AreaCategoria_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Area" (
    "Id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,
    "fk_categoria" TEXT NOT NULL,
    "areaSuperiorId" TEXT,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "cod" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "fk_area" TEXT NOT NULL,
    "title" TEXT,
    "NumIdentificacao" INTEGER NOT NULL,
    "telefone" TEXT NOT NULL,
    "morada" TEXT NOT NULL,
    "referencia" TEXT NOT NULL,
    "posto" TEXT NOT NULL,
    "salario_hora" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "completeName" TEXT NOT NULL,
    "Usar_horario" BOOLEAN NOT NULL,
    "Cartao" TEXT NOT NULL,
    "total_impressoes_digitais" INTEGER NOT NULL,
    "face" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("cod")
);

-- CreateIndex
CREATE UNIQUE INDEX "AreaCategoria_designacao_key" ON "AreaCategoria"("designacao");

-- CreateIndex
CREATE UNIQUE INDEX "Area_nome_key" ON "Area"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Area_sigla_key" ON "Area"("sigla");

-- AddForeignKey
ALTER TABLE "Area" ADD CONSTRAINT "Area_fk_categoria_fkey" FOREIGN KEY ("fk_categoria") REFERENCES "AreaCategoria"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Area" ADD CONSTRAINT "Area_areaSuperiorId_fkey" FOREIGN KEY ("areaSuperiorId") REFERENCES "Area"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_fk_area_fkey" FOREIGN KEY ("fk_area") REFERENCES "Area"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
