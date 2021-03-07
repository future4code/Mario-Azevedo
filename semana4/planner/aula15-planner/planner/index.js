//Iniciando Revisão Planner

 let criarTarefa = () =>{
    let tarefas = document.getElementById('tarefa')
    let diaSemana = document.getElementById('dias-semana')    
    
    document.getElementById(diaSemana.value).innerHTML += "<p>- " + tarefa.value + "</p>" 
    tarefas.value = ""
   
 } 
