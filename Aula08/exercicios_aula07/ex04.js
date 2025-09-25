/**
 * ex04_banco.js
 * CLI bancária simples usando readline.
 * Classe Cliente com operações: Pix, Empréstimo, Saque, Extrato.
 * Como executar: node ex04_banco.js
 */

const readline = require("readline");

class Cliente {
  /**
   * Armazena nome, profissão e saldo atual.
   * _historico é um array privado (por convenção) para registrar operações.
   */
  constructor(nome, profissao, saldo = 0) {
    this.nome = nome;
    this.profissao = profissao;
    this.saldo = Number(saldo);
    this._historico = [];
  }

  /**
   * Registra operações no histórico com data/hora.
   */
  _log(op, valor, obs = "") {
    const line = `${new Date().toLocaleString()} — ${op}: R$ ${valor.toFixed(2)} ${obs}`;
    this._historico.push(line);
  }

  /**
   * Envia um Pix, caso haja saldo suficiente.
   */
  Pix(valor) {
    valor = Number(valor);
    if (valor <= 0) throw new Error("Valor inválido.");
    if (this.saldo < valor) throw new Error("Saldo insuficiente.");
    this.saldo -= valor;
    this._log("Pix enviado", valor);
    return this.saldo;
  }

  /**
   * Concede um empréstimo e soma ao saldo (sem juros, fins didáticos).
   */
  Emprestimo(valor) {
    valor = Number(valor);
    if (valor <= 0) throw new Error("Valor inválido.");
    this.saldo += valor;
    this._log("Empréstimo recebido", valor);
    return this.saldo;
  }

  /**
   * Realiza saque se houver saldo suficiente.
   */
  Saque(valor) {
    valor = Number(valor);
    if (valor <= 0) throw new Error("Valor inválido.");
    if (this.saldo < valor) throw new Error("Saldo insuficiente.");
    this.saldo -= valor;
    this._log("Saque", valor);
    return this.saldo;
  }

  /**
   * Exibe o histórico de operações e o saldo atual.
   */
  Extrato() {
    console.log("\nExtrato:");
    this._historico.forEach((h) => console.log(" - " + h));
    console.log(`\nSaldo atual: R$ ${this.saldo.toFixed(2)}\n`);
  }
}

/* ===== Configuração da CLI ===== */
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const cliente = new Cliente("João", "Estudante", 500);

/**
 * Mostra o menu e roteia as opções digitadas.
 * O menu se reapresenta até o usuário escolher "Sair".
 */
function menu() {
  console.log(`
==== BANCO ====
1) Pix
2) Empréstimo
3) Saque
4) Extrato
5) Sair
Saldo: R$ ${cliente.saldo.toFixed(2)}
`);
  rl.question("Escolha uma opção: ", (op) => {
    switch (op.trim()) {
      case "1":
        rl.question("Valor do Pix: ", (v) => {
          try {
            cliente.Pix(Number(v));
            console.log("Pix realizado.");
          } catch (e) {
            console.log("Erro: " + e.message);
          }
          menu();
        });
        break;
      case "2":
        rl.question("Valor do Empréstimo: ", (v) => {
          try {
            cliente.Emprestimo(Number(v));
            console.log("Empréstimo creditado.");
          } catch (e) {
            console.log("Erro: " + e.message);
          }
          menu();
        });
        break;
      case "3":
        rl.question("Valor do Saque: ", (v) => {
          try {
            cliente.Saque(Number(v));
            console.log("Saque realizado.");
          } catch (e) {
            console.log("Erro: " + e.message);
          }
          menu();
        });
        break;
      case "4":
        cliente.Extrato();
        menu();
        break;
      case "5":
        console.log("Programa encerrado.");
        rl.close();
        break;
      default:
        console.log("Opção inválida.");
        menu();
    }
  });
}

menu();
