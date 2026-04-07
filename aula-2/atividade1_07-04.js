class Produto {
  nome;
  preco;
  estoque;

  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  exibirInfo() {
    console.log(
      `Nome: ${this.nome}\nPreco: R$ ${this.preco.toFixed(2)}\nQtd. estoque: ${this.estoque}`,
    );
  }

  vender(quantidade) {
    if (quantidade > this.estoque) {
      console.log("Nao e possivel vender essa quantidade. Estoque insuficiente.");
      return;
    }

    this.estoque -= quantidade;
    console.log(`Venda realizada com sucesso! Estoque atualizado: ${this.estoque}`);
  }

  repor(quantidade) {
    this.estoque += quantidade;
    console.log(`Estoque atualizado: ${this.estoque}`);
  }
}

const produto = new Produto("Caderno", 25.9, 10);
const escolha = 1;
const venda = 3;
const reposicao = 5;

if (escolha === 1) {
  produto.vender(venda);
} else if (escolha === 2) {
  produto.repor(reposicao);
} else if (escolha === 3) {
  console.log(`Estoque atual: ${produto.getEstoque}`);
} else {
  console.log("Opcao invalida.");
}

produto.exibirInfo();