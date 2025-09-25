/**
 * ex09_livro_altera_genero.js
 * Objetivo:
 *  - Criar objeto "livro" com propriedades básicas
 *  - Alterar a propriedade "genero" para "Aventura"
 *  - Exibir o resultado
 * Como executar: node ex09_livro_altera_genero.js
 */

(function main() {
  // 1) Ano atual para cálculo da idade
  const anoAtual = new Date().getFullYear();

  // 2) Cria o objeto "livro" com um gênero inicial
  const livro = {
    titulo: "Viagem ao Centro da Terra",
    autor: "Júlio Verne",
    anoPublicacao: 1864,
    genero: "Ficção Científica",
    idadePublicacao: anoAtual - 1864,
  };

  // 3) Altera o gênero conforme solicitado
  livro.genero = "Aventura";

  // 4) Exibe o resultado
  console.log("Livro atualizado:", livro);
})();
