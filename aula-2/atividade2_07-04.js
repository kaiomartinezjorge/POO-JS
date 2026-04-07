class Veiculo {
  marca;
  modelo;
  ano;

  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  exibirInfo() {
    console.log(
      `Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}`,
    );
  }
}

let veiculo = new Veiculo("Ferrari", "458", 2023);
veiculo.exibirInfo();

class Carro extends Veiculo {
  quantidadePortas;

  constructor(marca, modelo, ano, quantidadePortas) {
    super(marca, modelo, ano);
    this.quantidadePortas = quantidadePortas;
  }

  get getQuantidadePortas() {
    return this.quantidadePortas;
  }

  set setQuantidadePortas(quantidadePortas) {
    this.quantidadePortas = quantidadePortas;
  }

  exibirInfo() {
    console.log(
      `Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano} \nQuantidade de portas: ${this.quantidadePortas}`,
    );
  }
}

let carro = new Carro ("Lamborghini", " Revuelto", 2024, 2)
console.log("==========================================================")
carro.exibirInfo();
