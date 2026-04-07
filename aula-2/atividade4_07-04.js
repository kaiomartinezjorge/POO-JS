class Funcionario {
  nome;
  cargo;
  salario;

  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }

  aumentarSalario(percentual) {
    this.salario += this.salario * (percentual / 100);
  }

  exibirInfo() {
    console.log(
      `Nome: ${this.nome}\nCargo: ${this.cargo}\nSalario: R$ ${this.salario.toFixed(2)}`,
    );
  }
}

const funcionario = new Funcionario("Kaio", "Dev Senior", 67676767);
escolha = 1

if (escolha === 1) {
  funcionario.aumentarSalario(10);
}

funcionario.exibirInfo();