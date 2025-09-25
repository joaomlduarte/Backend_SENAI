/**
 * ex01_carro.js
 * Classe Carro simples, com estado do motor e métodos para ligar/desligar.
 * Como executar: node ex01_carro.js
 */

class Carro {
  /**
   * O construtor define os atributos básicos do carro e
   * inicia o motor como desligado.
   */
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.motorLigado = false; // estado interno do motor
  }

  /**
   * Liga o motor apenas se ainda estiver desligado.
   * Também evita ligar duas vezes seguidas.
   */
  ligar_motor() {
    if (!this.motorLigado) {
      this.motorLigado = true;
      console.log("Motor ligado.");
    } else {
      console.log("O motor já está ligado.");
    }
  }

  /**
   * Desliga o motor apenas se estiver ligado.
   */
  desligar_motor() {
    if (this.motorLigado) {
      this.motorLigado = false;
      console.log("Motor desligado.");
    } else {
      console.log("O motor já está desligado.");
    }
  }

  /**
   * Retorna uma string com o status atual do motor.
   */
  status_motor() {
    return this.motorLigado ? "Motor está LIGADO." : "Motor está DESLIGADO.";
  }
}

/* ===== Teste rápido ===== */
const carro = new Carro("Volkswagen", "Gol", 2015);
console.log(carro.status_motor());
carro.ligar_motor();
console.log(carro.status_motor());
carro.desligar_motor();
console.log(carro.status_motor());
