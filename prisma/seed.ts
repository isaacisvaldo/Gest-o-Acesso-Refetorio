
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
  const saltOrRounds = 10;
  const password = await hash('admin', saltOrRounds);
  const d =await prisma.perfil.findFirst({where:{
    designacao:'Admin'
  }})
  const g =await prisma.grupos.findFirst({where:{
    designacao:'Administrativo'
  }})
  const user = [
    { 
        nome:'Isvaldo',
        sobrenome :'Admin',
        username  :'admin',
        password :password,
        fk_perfil :d?.Id as string,
        fk_grupo :g?.Id
    },
   
];
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
