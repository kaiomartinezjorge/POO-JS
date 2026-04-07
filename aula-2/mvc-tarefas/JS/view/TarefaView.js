//classe para organização da interface da aplicação

export class TarefaView {
  constructor() {
    this.tarefaInput = document.getElementById("tarefaInput"); //entrada da nova tarefa
    this.addTarefaBtn = document.getElementById("addTarefaBtn");
    this.listaTarefas = document.getElementById("listaTarefas");
    this.mensagem = document.getElementById("mensagem");
  }

  getTarefaInputValue() {
    return this.tarefaInput.ariaValueMax.trim();
    //pega o valor do input
  }

  clearInput() {
    this.tarefaInput.value = "";
    //limpa o campo do input
  }

  showMensagem(texto) {
    this.mensagem.textContent = texto;
  }

  clearMensagem() {
    this.mensagem.textContent = "";
  }

    // Método para renderizar a tarefa na tela
    renderTarefa(tarefas, atualizar, remover){
        //limpar o a lista de tarefas
        this.listaTarefas.innerHTML = "";

        tarefas.foreach( tarefa => {
            const li = document.createElement("li");

            if(tarefa.completed){
                li.classList.add("completed"); //risca a tarefa se estiver completa
            }

            const span = document.createElement("span");
            span.textContent = tarefa.titulo;

            const action = document.createElement("div");
            action.classList.add("action");

            //Criar um botão para adicionar a tarefa (li)
            const atualizaBtn = document.createElement("button");
            atualizaBtn.textContent = tarefa.completed ? "Desfazer" : "Concluir"; 
            atualizaBtn.addEventListener("click", () => (atualizar.id));

            //Criar o botão para remover
            const removerBtn = document.createElement("button");
            removerBtn.textContent = "Remover";
            removerBtn.addEventListener("click", ()=> remover(tarefa.id));
            
            //Adicionando os BTN a lista de tarefas para cada tarefa
            action.appendChild(atualizaBtn);
            action.appendChild(removerBtn);

            //Adicionando os elementos no LI
            li.appendChild(span);
            li.appendChild(action);

            //Adicionando a lista a UL
            this.listaTarefas.appendChild(li)
        });
    }
}

// Pega elementos do HTML
// Le um valor do Input
// Limpa o Input
// Mostra mensagem 
// renderiza a lista de tarefas