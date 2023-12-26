import axios from 'axios';
import * as fs from 'fs';


const fileURL = 'URL_DO_ARQUIVO_EXCEL';
const destFilePath = 'caminho/para/salvar/o/arquivo/localmente.xlsx';

// Fazer uma solicitação para o servidor para obter o arquivo Excel
axios({
  method: 'get',
  url: fileURL,
  responseType: 'stream',
})
  .then((response) => {
    const destFile = fs.createWriteStream(destFilePath);
    response.data
      .on('end', () => {
        console.log('Arquivo baixado com sucesso!');

        // Agora você pode processar o arquivo localmente
        // Use uma biblioteca como 'xlsx' para ler o arquivo Excel
        // Exemplo de leitura usando 'xlsx':
        // const workbook = xlsx.readFile(destFilePath);
        // const sheetName = workbook.SheetNames[0];
        // const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
        
      })
      .on('error', (err) => {
        console.error('Erro ao baixar o arquivo:', err);
      })
      .pipe(destFile);
  })
  .catch((error) => {
    console.error('Erro ao fazer a solicitação:', error);
  });
