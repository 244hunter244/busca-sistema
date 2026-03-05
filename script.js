// 1 objeto q centraliza as info da instituicao
const instituicao = {
    alunos: [
        { nome: "Ana Julia", notas: [8.5, 9.0, 7.5] },
        { nome: "Renan Bazi", notas: [6.0, 5.5, 6.5] },
        { nome: "Carla Souza", notas: [10, 9.5, 10] },
        { nome: "Diego Lima", notas: [5.0, 4.0, 6.0] }
    ]
};

/**
 * funçao principal de consulta
 * @param {string} nomeBusca - o nome digitado pelo cordenador
 */
function consultarPlataforma(nomeBusca) {
    // tratamento de entrada remove espaços extras e ignora maiuscula e minuscula
    const termoPesquisa = nomeBusca.trim().toLowerCase();

    // 2 asociaçao de dados busca o aluno no array
    const alunoEncontrado = instituicao.alunos.find(aluno => 
        aluno.nome.toLowerCase() === termoPesquisa
    );

    // 5 tratamento de exceçoes se o nome não tive na base
    if (!alunoEncontrado) {
        return `Erro: O aluno "${nomeBusca}" não foi encontrado no sistema.`;
    }

    // 3 processamento de media calculo da media aritimetica simples
    const somaNotas = alunoEncontrado.notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const mediaFinal = somaNotas / alunoEncontrado.notas.length;

    // 6 feedback visual e textual do status
    const status = mediaFinal >= 7.0 ? "Aprovado" : "Em Recuperação";

    // 4 saida de dados retorno formatado com uma casa decimal so
    return {
        nome: alunoEncontrado.nome,
        media: mediaFinal.toFixed(1),
        status: status
    };
}

// --- exemplos de uso no console ---
console.log(consultarPlataforma("Ana Julia"));   // aluno achado aprovado
console.log(consultarPlataforma("Renan Bazi")); // aluno achado recuperaçao
console.log(consultarPlataforma("João"));        // erro nao achou