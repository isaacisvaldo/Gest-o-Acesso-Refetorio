
export async function formatte(data:any) {
    const dadosMapeados = data.map((dado:any) => ({
        cod: dado.Código,
        nome: dado.Nome,
        email: dado.Email,
        sexo: dado.Sexo,
        //fk_area: dado.IdDepartment.toString(),
        id_departamento:dado.IdDepartment.toString(),
        title: dado.Title,
        NumIdentificacao: parseInt(dado["Núm. Identificação"]) || 0,
        telefone: dado.Telefone,
        morada: dado.Morada,
        referencia: dado.Referência,
        posto: dado.Posto,
        salario_hora: dado["Salário por Hora"].toString(),
        ativo: !!dado.Ativo,
        completeName: dado.CompleteName,
        Usar_horario: !!dado["Usar Horário"],
        Cartao: dado.Cartão,
        total_impressoes_digitais: parseInt(dado["Total Impressões digitais"]) || 0,
        face: dado.Face
      })); 
      return dadosMapeados

    
}


  
 
  