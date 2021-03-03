function criarTarefa(){
    const tarefa = document.getElementById('tarefa')
    const diasSemana = document.getElementById('dias-semana')
    
    if(tarefa.value ===""){
        alert('Você não preencheu uma tarefa')
        return
    }

    document.getElementById(diasSemana.value).innerHTML += `<p>${tarefa.value}`
    tarefa.value = ""  
    
}

function riscado(){
 const diasSemana = document.getElementById('dias-semana')
 const semana = document.getElementById(diasSemana.value)
 document.getElementsByClassName(semana).style.color ="#ffffff";

}
