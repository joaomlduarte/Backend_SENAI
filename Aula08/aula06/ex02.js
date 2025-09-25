/**
 * ex02_meuArray_push_dobro.js
 * Objetivo: criar meuArray vazio, adicionar 3 inteiros com push(),
 * imprimir, depois substituir o elemento do índice 0 pelo dobro do valor atual.
 * Como executar: node ex02_meuArray_push_dobro.js
 */

// 1) Cria um array vazio
const meuArray = [];

// 2) Adiciona 3 números inteiros usando push()
meuArray.push(7);
meuArray.push(14);
meuArray.push(21);

// 3) Imprime os itens para verificar
console.log("Após push():", meuArray);

// 4) Substitui o primeiro elemento (índice 0) pelo dobro do seu valor atual
//    Pega o valor atual:
const primeiroValor = meuArray[0];
//    Calcula o dobro:
const dobro = primeiroValor * 2;
//    Atribui de volta no índice 0:
meuArray[0] = dobro;

// 5) Exibe o array atualizado
console.log("Atualizado (índice 0 dobrado):", meuArray);
