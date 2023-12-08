import conexao from "../../../config/index";

export const registoPagamentoRepository = {

   async findAll() {
      try {
         const registoPagamento = await conexao.registro.findMany({
            include: {
               employee: true,
               registroCodAcesso: true,
            }
         })
         return registoPagamento

      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);
      }
   },
   async findAById(Id:any) {
      try {
         const registo = await conexao.registro.findUnique({
            where:{
                 Id:Id
            }
         })
         return registo

      } catch (error) {
         throw new Error(`Erro Inesperado`);
      }
   },
   async create(data: any) {
      try {
         const status = await conexao.registro.create({ data })
         return status

      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);
      }
   },
   async createAcessCode(data: any) {
      try {
         const status = await conexao.registroCodAcesso.create({ data })
         return status

      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);
      }
   },
   async findByDate(date: any, cod_fk: any) {
      try {
         const registro = await conexao.registro.findFirst({
            where: {
               cod_fk: {
                  equals: cod_fk
               },
               data: {
                  equals: date
               },

            }
         })
         return registro

      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);
      }
   },
   async updateAcessCode(cod: any,status:any) {
      try {
         const codeAcess = await conexao.registroCodAcesso.update({ 
            where:{
            designacao: cod
            },
            data:{
               estado:status
            }
          })
         return codeAcess

      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);
      }
   },
   async updateAcessCodeWithIdRegister(Id: any,status:any) {
      try {
         const codeAcess = await conexao.registro.update({ 
            where:{
            Id: Id
            },
            data:{
               estado:status
            }
          })
         return codeAcess

      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);
      }
   },
   async findAcessCodeRegister(Id:any) {
      try {
         const registoPagamento = await conexao.registroCodAcesso.findFirst({
            where:{
               registroPagamento_fk:Id
            }
         })
         return registoPagamento

      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);
      }
   },

}