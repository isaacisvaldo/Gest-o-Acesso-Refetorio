import { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
  swaggerDefinition: {
    info: {
      title: 'Kimba Net-Talent',
      description: 'Descrição da minha API',
      version: '1.0.0',
    },
  },
  apis: ['src/**/*.ts'], // Caminho para os arquivos que contêm as rotas da sua aplicação
};
export default swaggerOptions;
