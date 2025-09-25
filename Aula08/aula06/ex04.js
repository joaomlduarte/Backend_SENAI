/**
 * ex04_clinica_veterinaria.js
 * Objetivo: simular fila de animais em uma clínica veterinária.
 * - Criar array clinica (fila)
 * - Simular chegada de 3 animais (push)
 * - Exibir a lista
 * - Remover animais um por vez (shift)
 * - Exibir estado final da lista
 * Como executar: node ex04_clinica_veterinaria.js
 */

// 1) Array vazio representando a fila da clínica
const clinica = [];

// 2) Chegada de três animais (push adiciona ao final da fila)
clinica.push("Cachorro");
clinica.push("Gato");
clinica.push("Coelho");

// 3) Exibe a lista atual (fila)
console.log("Fila inicial:", clinica);

// 4) Atende/remover um animal por vez (shift remove do início da fila)
const atendido1 = clinica.shift();
console.log("Atendido:", atendido1, " | Fila:", clinica);

const atendido2 = clinica.shift();
console.log("Atendido:", atendido2, " | Fila:", clinica);

const atendido3 = clinica.shift();
console.log("Atendido:", atendido3, " | Fila:", clinica);

// 5) Exibe o estado final (deve estar vazia)
console.log("Fila final:", clinica);
