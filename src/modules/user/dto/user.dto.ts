export interface  UserDTO {
    nome: string;
    sobrenome: string;
    username: string;
    password: string;
    fk_perfil?: string | null;
  }