//Base da estrutura do aplicativo
//Classe responsavel pelos dados

//Sera utilizada em outras partes do código
//Classe exportavel
export class TarefaModel {
  //Construtor da classe de tarefas
  constructor() {
    this.tarefas = [];
    this.currtentId = 1;
  }

  //Métodos
  addTarefa(titulo) {
    const newTarefa = {
      id: this.currtentId++,
      titulo: titulo,
      completed: false,
    };
    this.tarefas.push(newTarefa);
  }

  getTarefas() {
    return this.tarefas;
  } //Busca todas as tarefas do vetor

  atualizarTarefa(id) {
    const tarefa = this.tarefas.find((tarefa) => tarefa.id === id);
    if (tarefa) {
      //se tarefa for encontrada
      tarefa.completed = !this.tarefas.completed; //inverte o valor da booleana
    }
  }

  removeTarefa(id) {
    this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== id);
    //Estou reescrevendo o vetor sem a tarefa do id selecionada
  }
}

//O que foi feito?:
//criamos a lista de tarefas
//gera um id automatico para a tarefa
//adiciona tarefa
//busca as tarefas do vetor
//altera a tarefa
//remove a tarefa