/**
 * ex10_livro_delete_avaliacao.js
 * Objetivo:
 *  - Criar objeto "livro" com uma propriedade "avaliacao"
 *  - Remover a propriedade "avaliacao" usando "delete"
 *  - Exibir o objeto resultante e confirmar a remoção
 * Como executar: node ex10_livro_delete_avaliacao.js
 */

(function main() {
  // 1) Ano atual para cálculo da idade
  const anoAtual = new Date().getFullYear();

  // 2) Cria o objeto com "avaliacao"
  const livro = {
    titulo: "O Hobbit",
    autor: "J. R. R. Tolkien",
    anoPublicacao: 1937,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1937,
    avaliacao: 4.9,
  };

  // 3) Remove a propriedade "avaliacao" do objeto
  delete livro.avaliacao;

  // 4) Exibe o objeto resultante e verifica a ausência da propriedade
  console.log("Livro (sem avaliação):", livro);
  console.log("Possui 'avaliacao'?", "avaliacao" in livro);
})();
