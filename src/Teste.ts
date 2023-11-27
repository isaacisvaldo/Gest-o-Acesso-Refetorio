import * as XLSX from 'xlsx';
import { employeeRepository } from './modules/employee/repository/employee.repository';

// Para ler um arquivo Excel usando TypeScript e a biblioteca xlsx, é necessário garantir que o caminho para o arquivo esteja correto. Certifique-se de ter o arquivo Excel chamado exemplo.xlsx no mesmo diretório em que o código está sendo executado.

const nomeArquivo = 'exemplo.xlsx';
// Abaixo Temos a função responsavel de fazer a leitura do arquivo .xlsx
const lerArquivoExcel = async (nomeArquivo: string) => {
  try {
    const arquivo = XLSX.readFile(nomeArquivo);
    const primeiraPlanilha = arquivo.SheetNames[0];
    const dados = XLSX.utils.sheet_to_json(arquivo.Sheets[primeiraPlanilha]);
    console.log('Dados do arquivo Excel:');
    console.log(dados);
    
    return dados;
  } catch (erro) {
    console.error('Erro ao ler o arquivo Excel:', erro);
    return null;
  }
};

   async function Insert() { 
    const data = await lerArquivoExcel(nomeArquivo);
    const user = await employeeRepository.addData(data)   
  }
  Insert()

  // Para Rodar o script executar o camando yarn dx
