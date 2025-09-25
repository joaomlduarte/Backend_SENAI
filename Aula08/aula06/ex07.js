/**
 * ex07_livro_colchetes.js
 * Objetivo:
 *  - Criar um objeto "livro" (com idadePublicacao já definida)
 *  - Acessar e imprimir propriedades usando a notação de colchetes []
 * Como executar: node ex07_livro_colchetes.js
 */

(function main() {
  // 1) Ano atual para cálculo da idade
  const anoAtual = new Date().getFullYear();

  // 2) Objeto "livro" com todas as propriedades já definidas
  const livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
    genero: "Romance",
    idadePublicacao: anoAtual - 1899,
  };

  // 3) Exibição usando notação de colchetes
  console.log("Título:", livro["titulo"]);
  console.log("Autor:", livro["autor"]);
  console.log("Ano:", livro["anoPublicacao"]);
  console.log("Gênero:", livro["genero"]);
  console.log("Idade de Publicação:", livro["idadePublicacao"]);
})();
