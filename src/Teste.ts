import * as XLSX from 'xlsx';


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
lerArquivoExcel(nomeArquivo);
