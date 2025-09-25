/**
 * ex06_produtos.js
 * Classe Produto (mãe) e filhas Fritadeira, Televisao, ArCondicionado.
 * Todos possuem ligar/desligar; os que suportam ajuste de temperatura implementam esse método.
 * Como executar: node ex06_produtos.js
 */

class Produto {
  /**
   * Modelo genérico de produto com comunicação e consumo.
   */
  constructor({ nome, quantidade, preco, tipoComunicacao, consumoKwh }) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.preco = preco;
    this.tipoComunicacao = tipoComunicacao; // Wi-Fi, IR, Bluetooth, etc.
    this.consumoKwh = consumoKwh;
    this.ligado = false;
  }

  /**
   * Liga o produto.
   */
  ligar() {
    if (!this.ligado) {
      this.ligado = true;
      console.log(`${this.nome} ligado.`);
    } else {
      console.log(`${this.nome} já está ligado.`);
    }
  }

  /**
   * Desliga o produto.
   */
  desligar() {
    if (this.ligado) {
      this.ligado = false;
      console.log(`${this.nome} desligado.`);
    } else {
      console.log(`${this.nome} já está desligado.`);
    }
  }

  /**
   * Produtos genéricos não têm temperatura, então lançamos erro.
   * As subclasses que suportam temperatura sobrescrevem este método.
   */
  ajusteTemperatura(_setpoint) {
    throw new Error("Este produto não possui ajuste de temperatura.");
  }
}

class Fritadeira extends Produto {
  /**
   * Fritadeira armazena um setpoint de temperatura.
   */
  constructor(opts) {
    super(opts);
    this.tempAtual = 0;
  }
  ajusteTemperatura(setpoint) {
    this.tempAtual = Number(setpoint);
    console.log(`${this.nome}: temperatura ajustada para ${this.tempAtual} °C.`);
  }
}

class Televisao extends Produto {
  /**
   * TV aqui não usa temperatura de verdade,
   * mas mantemos a assinatura para cumprir o enunciado.
   */
  constructor(opts) {
    super(opts);
    this.canal = 1;
  }
  ajusteTemperatura(setpoint) {
    console.log(`${this.nome}: setpoint de temperatura (simulado) = ${setpoint} °C.`);
  }
}

class ArCondicionado extends Produto {
  /**
   * Ar-condicionado tem temperatura de operação real.
   */
  constructor(opts) {
    super(opts);
    this.tempAtual = 24;
  }
  ajusteTemperatura(setpoint) {
    this.tempAtual = Number(setpoint);
    console.log(`${this.nome}: temperatura ajustada para ${this.tempAtual} °C.`);
  }
}

/* ===== Teste rápido ===== */
const frit = new Fritadeira({
  nome: "Fritadeira Elétrica",
  quantidade: 10,
  preco: 399.9,
  tipoComunicacao: "Wi-Fi",
  consumoKwh: 1.2,
});
frit.ligar();
frit.ajusteTemperatura(180);
frit.desligar();

const tv = new Televisao({
  nome: 'TV 55" 4K',
  quantidade: 5,
  preco: 2999.0,
  tipoComunicacao: "IR",
  consumoKwh: 0.15,
});
tv.ligar();
tv.ajusteTemperatura(25); // apenas para cumprir a interface
tv.desligar();

const ar = new ArCondicionado({
  nome: "Split 9000 BTU",
  quantidade: 3,
  preco: 1899.0,
  tipoComunicacao: "Wi-Fi",
  consumoKwh: 1.0,
});
ar.ligar();
ar.ajusteTemperatura(22);
ar.desligar();
