import conexao from "../../../config/index";

export const logsRepository = {
  
    async createlogsUser(data:any){
        try {
            const log = await conexao.userLogs.createMany({data}) 
            return log
        } catch (error) {
            throw new Error(`Erro ao Cadastrar : ${error}`);
        }

    },
    async findAllLogsUser(){
        try {
            const logs = await conexao.userLogs.findMany({
         
            })
            return logs
            
        } catch (error) {
            throw new Error(`Erro ao pesquisar : ${error}`);
         
        }
    },
    async findLogsUserBYIdUser(Id:any){
        try {
            const logs = await conexao.userLogs.findMany({
           where:{
            user_fk:Id
           }
            })
            return logs
            
        } catch (error) {
            throw new Error(`Erro ao pesquisar : ${error}`);
         
        }
    }
    ,
    async findLogsEmployeeById(Id:any){
        try {
            const logs = await conexao.employeeLogs.findMany({
           where:{
            employee_fk:Id
           }
            })
            return logs
            
        } catch (error) {
            throw new Error(`Erro ao pesquisar : ${error}`);
         
        }
    },
    async createlogsEmployee(data:any){
        try {
            const log = await conexao.employeeLogs.createMany({data}) 
            return log
        } catch (error) {
            throw new Error(`Erro ao Cadastrar : ${error}`);
        }

    },

}