import * as XLSX from 'xlsx';
import { employeeRepository } from './modules/employee/repository/employee.repository';


const nomeArquivo = 'exemplo.xlsx';
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

   async function name() {
    const data = await lerArquivoExcel(nomeArquivo);
    const user = await employeeRepository.addData(data)   
  }
name()
