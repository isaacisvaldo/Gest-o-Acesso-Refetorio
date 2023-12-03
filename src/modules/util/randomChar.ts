export async function generateUniqueCode(): Promise<string> {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
  
    while (code.length < 5) {
      const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
      if (!code.includes(randomChar)) {
        code += randomChar;
      }
    }
  
    return code;
  }
  
  // Exemplo de uso
  const uniqueCode = generateUniqueCode();
  console.log(uniqueCode);