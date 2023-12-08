export interface  UserDTO {
    nome: string;
    sobrenome: string;
    username: string;
    password: string;
    fk_perfil?: string | null;
  }

  export interface  UserLogDTO {
    titulo: string;
    designacao: string;
    user_fk: string;
  }
  export interface  EmployeeLogDTO {
    titulo: string;
    designacao: string;
    employee_fk: number;
  }