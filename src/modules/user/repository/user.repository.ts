import conexao from "../../../config/index";

export const userRepository = {
    async findByUsername(username:string) {
     try {
         const user = await conexao.user.findFirst({
            where:{
                username:username,
            },
            include:{
                perfil:true,
                Grupos:true
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

    },
    async findAll(){
        try {
            const users = await conexao.user.findMany({
                include:{
                    perfil:true,
                }
            })
            return users
            
        } catch (error) {
            throw new Error(`Erro ao pesquisar : ${error}`);
         
        }
    }

}