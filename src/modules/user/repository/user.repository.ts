import conexao from "../../../config/index";

export const userRepository = {
    async findByUsername(username:string) {
     try {
         const user = await conexao.user.findFirst({
            where:{
                username:username,
            }
        
        })
        return user
     } catch (error) {
        throw new Error(`Erro ao pesquisar : ${error}`);
     }

    },
    async create(data:any){
        try {
            const user = await conexao.user.createMany({data}) 
            return user
        } catch (error) {
            throw new Error(`Erro ao Cadastrar : ${error}`);
        }

    }

}