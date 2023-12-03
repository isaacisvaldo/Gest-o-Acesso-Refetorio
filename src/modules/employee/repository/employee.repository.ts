import conexao from "../../../config/index";

export const employeeRepository = {
    async addData(data:any) {
     try {
        const user = await conexao.employee.createMany({data})
     } catch (error) {
        throw new Error(`Erro ao adicionar : ${error}`);
     }

    },
    async findBycod(cod:any) {
      try {
         const employee = await conexao.employee.findFirst({
            where:{
               cod:cod
            }
         })
         return employee
      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);
      }
 
     },
     async findAll(){
      try {
         const employeer = await conexao.employee.findMany()
         return employeer
         
      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);  
      }
     }
}