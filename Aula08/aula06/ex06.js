/**
 * ex06_livro_idade.js
 * Objetivo:
 *  - Obter o ano atual
 *  - Criar objeto "livro"
 *  - Adicionar propriedade "idadePublicacao" = anoAtual - anoPublicacao
 *  - Montar e exibir uma string "mostrarDetalhes" com todas as informações
 * Como executar: node ex06_livro_idade.js
 */

(function main() {
  // 1) Ano atual do sistema
  const anoAtual = new Date().getFullYear();

  // 2) Objeto "livro" básico
  const livro = {
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    anoPublicacao: 2008,
    genero: "Tecnologia",
  };

  // 3) Propriedade calculada "idadePublicacao"
  livro.idadePublicacao = anoAtual - livro.anoPublicacao;

  // 4) Monta string legível com todos os dados
  const mostrarDetalhes =
    `Título: ${livro.titulo}\n` +
    `Autor: ${livro.autor}\n` +
    `Ano de Publicação: ${livro.anoPublicacao}\n` +
    `Gênero: ${livro.genero}\n` +
    `Idade de Publicação: ${livro.idadePublicacao} ano(s)`;

  // 5) Exibe a string
  console.log(mostrarDetalhes);
})();
