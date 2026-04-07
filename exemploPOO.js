//Estudos de POO em JavaScript
//Diferença entre procedural e POO

//Declaração de uma variavel em Procedural

let produto1 = {
  nome: "Impressora",
  preco: 1000,
  marca: "HP",
  disponivel: true,
  desconto: function () {
    return this.preco * 0.1; // desconto de 10% quando solicitado
  },
}; //coleção

let produto2 = {
  nome: "WebCam",
  preco: 550,
  marca: "Multilaser",
  disponivel: false,
  desconto: function () {
    return this.preco * 0.2;
  },
};

// imprimindo informações do produto
console.log(
  `Produto: ${produto1.nome}, Preço: ${produto1.preco}, Marca: ${produto1.marca}, Disponivel: ${produto1.disponivel ? "Sim" : "Não"} Desconto: ${produto1.disponivel ? produto1.desconto() * 0.1 : produto1}`,
);

//Declaração de uma classe para a criação de um obj produto

class Produto {
  //Atributos
  nome;
  preco;
  marca;
  disponivel;

  //Método
  //Construtor
  constructor(nome, preco, marca, disponibilidade) {
    this.nome = nome;
    this.preco = preco;
    this.marca = marca;
    this.disponivel = disponibilidade;
  }

  //Método para aplicar o desconto
  desconto() {
    return this.preco * 0.1;
  }

  toString() {
    return `Produto: ${this.nome}, 
    Preço: ${this.preco}, 
    Marca: ${this.marca}, 
    Disponivel: ${this.disponivel ? "Sim" : "Não"} 
    Desconto: ${this.disponivel ? this.desconto() * 0.1 : this}`;
  }
}

//Declara meus produtos
let p1 = new Produto("Microfone", 600, "Elgin", true);
let p2 = new Produto("Headset", 150, "Dragon", false);

console.log(p1.toString());
console.log(p2.toString());