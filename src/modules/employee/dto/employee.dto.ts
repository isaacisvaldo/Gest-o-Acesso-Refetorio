export interface  Employee {
    cod: Number ;
    nome: String;
    email?: String;
    sexo?: String;
    //fk_area?: String
    id_departamento?:any
    title?: String
    NumIdentificacao: Number;
    telefone?: String;
    morada?: String;
    referencia?: String;
    posto: String;
    salario_hora: String;
    ativo?: Boolean;
    completeName?: String;
    Usar_horario?: Boolean;
    Cartao?: String;
    total_impressoes_digitais?: Number;
    face?: String;
  }
  