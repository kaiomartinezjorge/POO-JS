class Conta {
  titular;
  saldo;

  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }


  depositar(valor) {
    this.saldo += valor;
    console.log(`Conta atualizada: ${this.saldo}`);
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log(
        "Nao e possivel sacar essa quantidade. Saldo insuficiente.",
      );
      return;
    }

    this.saldo -= valor;
    console.log(
      `Saque realizado com sucesso! Conta atualizada: ${this.saldo}`,
    );
  }
}

const escolha = 1;
const sacar = 300;
const depositar = 5;
const saldo = 1000;

const conta = new Conta("Kaio", saldo);

if (escolha === 1) {
  conta.sacar(sacar);
} else if (escolha === 2) {
  conta.depositar(depositar);
}