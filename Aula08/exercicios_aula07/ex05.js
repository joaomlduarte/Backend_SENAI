/**
 * ex05_maquinas.js
 * Classe Maquina (mãe) e Furadeira (filha) com ligar, desligar e ajustar rotação.
 * Como executar: node ex05_maquinas.js
 */

class Maquina {
  /**
   * Construtor genérico de máquina industrial.
   * "ligada" representa o estado operacional atual.
   */
  constructor({ nome, qtdEixos, rpm, consumoKwh }) {
    this.nome = nome;
    this.qtdEixos = qtdEixos;
    this.rpm = rpm;
    this.consumoKwh = consumoKwh;
    this.ligada = false;
  }

  /**
   * Liga a máquina, evitando duplicidade.
   */
  ligar() {
    if (!this.ligada) {
      this.ligada = true;
      console.log(`${this.nome} ligada.`);
    } else {
      console.log(`${this.nome} já está ligada.`);
    }
  }

  /**
   * Desliga a máquina, evitando duplicidade.
   */
  desligar() {
    if (this.ligada) {
      this.ligada = false;
      console.log(`${this.nome} desligada.`);
    } else {
      console.log(`${this.nome} já está desligada.`);
    }
  }

  /**
   * Ajusta a rotação, com validação básica.
   */
  ajustarRpm(novoRpm) {
    if (novoRpm <= 0) throw new Error("RPM deve ser positivo.");
    this.rpm = novoRpm;
    console.log(`${this.nome} agora em ${this.rpm} RPM.`);
  }
}

class Furadeira extends Maquina {
  /**
   * Furadeira é um tipo específico de máquina com 1 eixo.
   */
  constructor({ nome, rpm, consumoKwh }) {
    super({ nome, qtdEixos: 1, rpm, consumoKwh });
  }
}

/* ===== Teste rápido ===== */
const f = new Furadeira({ nome: "Furadeira Coluna", rpm: 1200, consumoKwh: 1.5 });
f.ligar();
f.ajustarRpm(1800);
f.desligar();
