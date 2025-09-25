/**
 * ex05_livro.js
 * Objetivo:
 *  - Criar um objeto "livro" com propriedades básicas
 *  - Exibir seus detalhes no console
 * Como executar: node ex05_livro.js
 */

(function main() {
  // 1) Define o objeto "livro" com as propriedades solicitadas
  const livro = {
    titulo: "O Morro dos Ventos Uivantes",
    autor: "Emily Brontë",
    anoPublicacao: 1847,
    genero: "Romance",
  };

  // 2) Imprime os detalhes no console, propriedade por propriedade
  console.log("Detalhes do livro:");
  console.log("Título:", livro.titulo);
  console.log("Autor:", livro.autor);
  console.log("Ano de Publicação:", livro.anoPublicacao);
  console.log("Gênero:", livro.genero);
})();
