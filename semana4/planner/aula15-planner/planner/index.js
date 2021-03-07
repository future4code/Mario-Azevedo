//Iniciando Revisão Planner

let criarTarefa = () =>{
    let tarefas = document.getElementById('tarefa')
    let diaSemana = document.getElementById('dias-semana')
    
    

    document.getElementsByName('dias-semana.value').innerHTML += `<p> ${tarefas.value}</p>`
    tarefas.value = ""

    console.log(tarefas.value)
    console.log (diaSemana.value)
}