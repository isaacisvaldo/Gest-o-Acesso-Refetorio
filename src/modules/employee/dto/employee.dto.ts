export interface Employee {
  cod: number;
  nome: string;
  email?: string;
  sexo?: string;
  //fk_area?: string
  id_departamento?: any;
  title?: string;
  NumIdentificacao: number;
  telefone?: string;
  morada?: string;
  referencia?: string;
  posto: string;
  salario_hora: string;
  ativo?: boolean;
  completeName?: string;
  Usar_horario?: boolean;
  Cartao?: string;
  total_impressoes_digitais?: number;
  face?: string;
}
