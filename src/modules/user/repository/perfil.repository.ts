import conexao from "../../../config/index";

export const perfilRepository = {
  
    async create(data:any){
        try {
            const user = await conexao.perfil.createMany({data}) 
            return user
        } catch (error) {
            throw new Error(`Erro ao Cadastrar : ${error}`);
        }

    },
    async findAll(){
        try {
            const perfil = await conexao.perfil.findMany({
         
            })
            return perfil
            
        } catch (error) {
            throw new Error(`Erro ao pesquisar : ${error}`);
         
        }
    }

}