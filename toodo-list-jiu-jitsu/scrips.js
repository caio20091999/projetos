alert('Seja bem vindo a sua lista de tarefas')

const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')


const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens=[]


function adicionarNovaTarefa() {
    minhaListaDeItens.push({

        tarefa: input.value,
        concluida: false
    })

    input.value=''

    mostraTarefas()


}

function mostraTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((item, index) => {

    novaLi = novaLi + `
    
    
    <li class="task ${item.concluida && "done"}">
    <img src="/toodo-list-jiu-jitsu/img/checked.png" alt="checked-list" onclick = "concluirTarefa(${index})">
    <p>${item.tarefa}</p>
    <img src="/toodo-list-jiu-jitsu/img/trash.png" alt="trash" onclick ="deletarItem(${index})">
</li>
    
    
    
    
    `
        

    })

    listaCompleta.innerHTML = novaLi



    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))


}



function concluirTarefa(index){
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida


    mostraTarefas()

}


function deletarItem(index){
    minhaListaDeItens.splice(index, 1)
    
    mostraTarefas()
}


function recarregarTarefas(){

    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage) {
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage) 
    }

    mostraTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)