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
     },
     async findBycodAcess(cod:any,estado:any) {
      try {
         const data = await conexao.registroCodAcesso.findFirst({
            where:{
              designacao:cod,
              estado:estado
            },
            include:{
               registro:{
                  include:{
                     employee:true
                  }
               }
            }
         })
         return data
      } catch (error) {
         throw new Error(`Erro ao adicionar : ${error}`);
      }
 
     },
     async findByRangeData(dateStart:any,dateEnd:any){
        try {
            const registro = await conexao.registro.findMany({
                where: {
                    data: {
                        gte: dateStart,
                        lte: dateEnd
                    }
                  },
                  include:{
                    employee:true,
                    registroCodAcesso:true,
                  }
            })
            return registro
            
         } catch (error) {
            throw new Error(`Erro ao adicionar : ${error}`);  
         }  
     },
     async findByRangeDataEstado(dateStart:any,dateEnd:any,status:any){
        try {
            const registro = await conexao.registro.findMany({
                where: {
                    data: {
                        gte: dateStart,
                        lte: dateEnd
                    },
                    estado:status
                  },
                  
                  include:{
                    employee:true,
                    registroCodAcesso:true,
                  }
            })
            return registro
            
         } catch (error) {
            throw new Error(`Erro ao adicionar : ${error}`);  
         }  
     }
}