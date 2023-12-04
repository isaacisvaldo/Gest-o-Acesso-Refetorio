import conexao from "../../../config/index";

export const registoPagamentoRepository = {

     async findAll(){
      try {
         const registoPagamento = await conexao.registro.findMany({
            include:{
               employee:true,
               registroCodAcesso:true,
            }
         })
         return registoPagamento
         
      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);  
      }
     },
  
     async create(data:any){
      try {
         const status = await conexao.registro.create({data })
         return status
         
      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);  
      }
     },
      
     async create2(data:any){
        try {
           const status = await conexao.registro.createMany({data })
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