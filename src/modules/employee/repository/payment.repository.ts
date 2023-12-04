import conexao from "../../../config/index";

export const registoPagamentoRepository = {

     async findAll(){
      try {
         const registoPagamento = await conexao.registoPagamento.findMany({
            include:{
               employee:true,
               registroCodAcesso:true,
               estadoPagamento:true,
            }
         })
         return registoPagamento
         
      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);  
      }
     },
     async findAllStatusPayment(){
      try {
         const status = await conexao.estadoPagamento.findMany({
         })
         return status
         
      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);  
      }
     },
     async create(data:any){
      try {
         const status = await conexao.registoPagamento.create({data })
         return status
         
      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);  
      }
     },
     async createAcessCode(data:any){
      try {
         const status = await conexao.registroCodAcesso.create({data })
         return status
         
      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);  
      }
     },
     async findAllAcessCode(){
      try {
         const registoPagamento = await conexao.registroCodAcesso.findMany({
         })
         return registoPagamento
         
      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);  
      }
     },

}