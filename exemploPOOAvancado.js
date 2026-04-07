//Estudos Avançados de POO em Javascript

//criação de  ua Classe

class Pessoa {
  //atributos privados (encapsulamento)
  #nome; //atributo privado
  #idade; //atributo privado
  #cpf; //atributo privado

  //construtor
  constructor(nome, idade, cpf) {
    this.#nome = nome;
    this.#idade = idade;
    this.#cpf = cpf;
  }

  //getters and setters
  get getNome() {
    //pegam o valor do atributo privado
    return this.#nome;
  }

  get getIdade() {
    //pegam o valor do atributo privado
    return this.#idade;
  }

  get getCpf() {
    //pegam o valor do atributo privado
    return this.#cpf;
  }

  set setNome(nome) {
    this.#nome = nome;
  }

  set setIdade(idade) {
    //alterar o valor da Idade
    this.#idade = idade;
  }

  //método de Acesso
  exibirInfo() {
    console.log(
      `Nome: ${this.#nome}\nIdade: ${this.#idade}\nCPF: ${this.#cpf}`,
    );
  }
}

// Instanciar Objetos de Pessoas 
let pessoa1 = new Pessoa("João", 25, "123.456.789-00");
let pessoa2 = new Pessoa("Maria", 30, "987.654.321-00");

pessoa1.exibirInfo();
pessoa2.exibirInfo();

//alterar a idade da pessoa 1

pessoa1.setIdade(26);
pessoa1.exibirInfo();

//Herança em POO (extends)

class Funcionario extends Pessoa{
    //novos Atributos
    #cargo;
    #salario;
    
    //construtor
    constructor(nome, idade, cpf, cargo, salario){
        super(nome, idade, cpf);  //chama os atributos da superclasse
        this.#cargo = cargo;
        this.#salario = salario;
    }

    // métodos públicos (get Set)
    get getCargo(){
        return this.#cargo;
    }
    get getSalario(){
        return this.#salario;
    }
    set setCargo(cargo){
        this.#cargo = cargo;
    }
    set setSalario(salario){
        this.#salario = salario;
    }

    //Método de acesso
    exibirInfo(){
        exibirInfo(); 
        console.log(`Cargo: ${this.#cargo}\nSalário: R$${this.#salario}`);
    }
}

//instanciar OBJ da classe Funcionário

let funcionario1 = new Funcionario("Pedro", 27, "321.654.987-00", "Motorista", 3000);
funcionario1.exibirInfo();
funcionario1.setSalario(3500);
funcionario1.exibirInfo();

