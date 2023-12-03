import conexao from "../../../config/index";

export const registoPagamentoRepository = {

     async findAll(){
      try {
         const registoPagamento = await conexao.registoPagamento.findMany({
            include:{
               employee:true,
               registroCodAcesso:true,
            }
         })
         return registoPagamento
         
      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);  
      }
     }
}