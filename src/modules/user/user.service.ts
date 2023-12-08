
import { UserDTO } from "./dto/user.dto";
import { userRepository } from "./repository/user.repository";

export const UserService ={

    async  validationUser(data:UserDTO):Promise <any> {
        
      if(data.username == null || data.username==""){
          return {error:'Username Não pode estar vazio !'};
     
      }else if(data.nome== null || data.nome==""){
        return {error:'Username Não pode estar vazio !'};
      }else if(data.fk_perfil== null || data.fk_perfil==""){
        return {error:'Perfil Não pode estar vazio !'};
      }else if(data.sobrenome== null || data.sobrenome==""){
        return {error:'Sobrenome Não pode estar vazio !'};
      }else{
        //
        const user = await userRepository.findByUsername(data.username)
        if(!user){
          return {sucess:'Dados Válido !'};
        }else{
          return {error:'User name Encontrado  !'};
        }
      }
      },
      
      
    }
  
