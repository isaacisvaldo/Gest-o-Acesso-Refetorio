import conexao from "../../../config/index";

export const employeeRepository = {
    async addData(data:any) {
     try {
        const user = await conexao.user.createMany({data})
     } catch (error) {
        throw new Error(`Erro ao adicionar : ${error}`);
     }

    }

}