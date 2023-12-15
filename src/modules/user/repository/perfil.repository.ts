import conexao from "../../../config/index";

export const perfilRepository = {
  
    async FindAllGroup(){
        try {
            const grupos = await conexao.grupos.findMany() 
            return grupos
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