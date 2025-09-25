/**
 * ex03_automoveis.js
 * Classe mãe Automovel e filhas Carro, Moto, Caminhao.
 * Métodos comuns: ligar, desligar. Carro possui abrirVidro/descerVidro.
 * Como executar: node ex03_automoveis.js
 */

class Automovel {
  /**
   * Construtor genérico. "qtdRodas" será padronizada nas filhas.
   */
  constructor({ cor, modelo, tipoCombustivel, qtdRodas }) {
    this.cor = cor;
    this.modelo = modelo;
    this.tipoCombustivel = tipoCombustivel;
    this.qtdRodas = qtdRodas;
    this.motorLigado = false;
  }

  /**
   * Liga o automóvel, evitando duplicidade.
   */
  ligar() {
    if (!this.motorLigado) {
      this.motorLigado = true;
      console.log(`${this.modelo}: motor ligado.`);
    } else {
      console.log(`${this.modelo}: motor já estava ligado.`);
    }
  }

  /**
   * Desliga o automóvel, evitando duplicidade.
   */
  desligar() {
    if (this.motorLigado) {
      this.motorLigado = false;
      console.log(`${this.modelo}: motor desligado.`);
    } else {
      console.log(`${this.modelo}: motor já estava desligado.`);
    }
  }
}

class Carro extends Automovel {
  /**
   * Força 4 rodas e adiciona estado do vidro.
   */
  constructor(opts) {
    super({ ...opts, qtdRodas: 4 });
    this.vidroAberto = false;
  }

  /**
   * Abre o vidro, se estiver fechado.
   */
  abrirVidro() {
    if (!this.vidroAberto) {
      this.vidroAberto = true;
      console.log(`${this.modelo}: vidro aberto.`);
    } else {
      console.log(`${this.modelo}: vidro já estava aberto.`);
    }
  }

  /**
   * Fecha o vidro, se estiver aberto.
   */
  descerVidro() {
    if (this.vidroAberto) {
      this.vidroAberto = false;
      console.log(`${this.modelo}: vidro fechado.`);
    } else {
      console.log(`${this.modelo}: vidro já estava fechado.`);
    }
  }
}

class Moto extends Automovel {
  /**
   * Força 2 rodas.
   */
  constructor(opts) {
    super({ ...opts, qtdRodas: 2 });
  }
}

class Caminhao extends Automovel {
  /**
   * Força 6 rodas (exemplo simples).
   */
  constructor(opts) {
    super({ ...opts, qtdRodas: 6 });
  }
}

/* ===== Teste rápido ===== */
const c = new Carro({ cor: "preto", modelo: "Sedan", tipoCombustivel: "Gasolina" });
c.ligar();
c.abrirVidro();
c.descerVidro();
c.desligar();

const m = new Moto({ cor: "vermelho", modelo: "Street", tipoCombustivel: "Gasolina" });
m.ligar();
m.desligar();

const k = new Caminhao({ cor: "branco", modelo: "Truck", tipoCombustivel: "Diesel" });
k.ligar();
k.desligar();
