/**
 * ex08_livro_avaliacao.js
 * Objetivo:
 *  - Criar objeto "livro" com "avaliacao" iniciando como null
 *  - Se "avaliacao" for null, atribuir uma nota (ex.: 4.8)
 *  - Exibir os detalhes finais do livro
 * Como executar: node ex08_livro_avaliacao.js
 */

(function main() {
  // 1) Ano atual para cálculo da idade
  const anoAtual = new Date().getFullYear();

  // 2) Cria o objeto "livro" com avaliacao == null
  const livro = {
    titulo: "A Guerra dos Tronos",
    autor: "George R. R. Martin",
    anoPublicacao: 1996,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1996,
    avaliacao: null, // sem avaliação inicial
  };

  // 3) Caso a avaliação esteja null, atribui um valor padrão
  if (livro.avaliacao === null) {
    livro.avaliacao = 4.8; // exemplo de nota
    console.log("Avaliação atribuída:", livro.avaliacao);
  } else {
    console.log("O livro já possuía avaliação:", livro.avaliacao);
  }

  // 4) Exibe o objeto completo
  console.log("Detalhes finais do livro:", livro);
})();
