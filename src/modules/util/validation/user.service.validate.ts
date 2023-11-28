import { UsuarioDTO } from "../../user/dto/user.dto";
import { userRepository } from "../../user/repository/user.repository";

export const userValidate = {

    async valiadeUser(data:UsuarioDTO){
        try {
            const find = await userRepository.findByUsername(data.username);
            if(find){
                return {error: "username ja existe !" };  
            }else{
                return {success: "Dados validos!" };    
            }
        } catch (error) {
            throw new Error(`Erro ao Cadastrar : ${error}`);
        }

    }
}
