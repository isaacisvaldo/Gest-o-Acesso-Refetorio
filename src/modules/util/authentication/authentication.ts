import * as bcrypt from 'bcryptjs';

export const autenticationService ={
    async passConfirmation(senha: string, senha2: string) {
        try {
          return bcrypt.compare(senha, senha2);
        } catch (error) {
          throw new Error(`Erro Interno: ${error}`);
        }
      }
}