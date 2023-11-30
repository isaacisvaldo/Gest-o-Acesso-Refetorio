
import cron from 'node-cron';
import { lerArquivoExcel } from '../utils/readFile';

const nomeArquivo = 'exemplo.xlsx';
const iniciarCron = () => {
    cron.schedule('* * * * * *', async () => { // 0 20 * * * este serve para executar todos os dias as 20h
        try {
            const data = await lerArquivoExcel(nomeArquivo); 
            if(!data.error) {
                console.log('Arquivo Encontrado', data);
            }else{
                console.error('Erro ao ler o arquivo Excel'); 
            }
            
        } catch (error) {
            console.error('Erro ao ler o arquivo Excel:', error);
        }
    });
};

export default iniciarCron;
