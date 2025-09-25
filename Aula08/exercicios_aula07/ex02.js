class Pessoa {
    /**
     * Construtor basico com quatro atributos
     */
    constructor(nome, idade, profissao, salario) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.salario = salario;
    }

    /**
     * Exibe onde a pessoa trabalha e há quanto tempo.
     * Apenas imprime no console;
     */

    exibeTrabalho(nomeEmpresa, tempoDeTrabalho) {
        console.log(`${this.nome} - ${this.profissao}`);
        console.log(`Empresa: ${nomeEmpresa}`);
        console.log(`Tempo de trabalho: ${tempoDeTrabalho}`);
    }
}


const p = new Pessoa("Daniel", 30,"Professor", 5000);
p.exibeTrabalho("SENAI", "2 anos")