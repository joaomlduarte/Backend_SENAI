/**
 * ex01_array_primeiro_indice.js
 * Objetivo: iniciar um array com 5 elementos, alterar o índice 0,
 * e exibir antes/depois.
 * Como executar: node ex01_array_primeiro_indice.js
 */

// 1) Cria um array com 5 elementos
const arr = [10, 20, 30, 40, 50];

// 2) Mostra o array "antes" da alteração
console.log("Antes:", arr);

// 3) Altera o valor no índice 0 (primeira posição)
arr[0] = 999;

// 4) Mostra o array "depois" da alteração
console.log("Depois:", arr);
