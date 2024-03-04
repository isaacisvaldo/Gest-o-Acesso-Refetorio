
import { PrismaClient } from '@prisma/client';
import { perfil } from './seeds/perfil.seed';
import { grupos } from './seeds/grupos.seed';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();
async function main() {

  await prisma.perfil.deleteMany(); 
  await prisma.grupos.deleteMany(); 
  await prisma.perfil.createMany({ data: perfil })
  await prisma.grupos.createMany({ data: grupos })
 const perfil2 = await prisma.perfil.findFirst({ 
  where:{
    designacao:'Admin'
  }
 })
 const grupo2 = await prisma.grupos.findFirst({ 
  where:{
    designacao:'Administrativo'
  }
 })

 const user= {
    nome: 'admin Geral',
    sobrenome: 'Geral',
    username: 'admin',
    password:  await hash('admin', 10),
    fk_perfil:perfil2?.Id,
    fk_grupo:grupo2?.Id
  }
  await prisma.user.deleteMany()
  await prisma.user.createMany({ data: user })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
