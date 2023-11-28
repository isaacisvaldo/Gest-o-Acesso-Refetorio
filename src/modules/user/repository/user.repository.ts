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

    }

}