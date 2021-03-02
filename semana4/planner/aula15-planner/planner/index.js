
function criarTarefa(){
    const tarefa = document.getElementById('tarefa')
    const semana = document.getElementById('dias-semana')
   
    
   
document.getElementById(semana.value).innerHTML  +=`<p>${tarefa.value}`
    tarefa.value = ""
}



 
      
