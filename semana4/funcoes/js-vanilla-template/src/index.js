/* Exercício 1
a) Será impresso no console 10 e 50
b) O código simplesmente rodaria, sem que fosse printado.
Não apareceria nada no console.
*/

/*
Exercício 2

a) Sera impressa no console Darvas e Caio
 b) Amanda e Caio
  */

/* Exercício 3

O código está verificando se is numeros do array são pares
e armazenando em arrayFinal os seus quadrados.

Array = numeros
x = valores
ArrayFinal = quadrados */

//Exercício 4

//a)
let informacoes = () =>{
    console.log("Resposta Exercício 4 (a): Eu sou Mário, tenho 23 anos, moro em Paraíba do sul e sou Estudante")
}
informacoes()

//b)

function informacao(nome, idade, endereco, estudante){
    console.log('Resposta Exercício 4 (b):Eu sou ',nome,' tenho ',idade,' anos, moro em ',endereco,' e sou',estudante,'.')
}

informacao('Mário', 36, 'paraiba', 'estudante')

//Exercício 5 

//a

function numeros(num1,num2){
    let soma = num1 + num2
    console.log('Resultado Exercício 5 (a): ', soma)

    
}

numeros(8,4)


//b

function numeros2(n1, n2){
    
    if (n1>=n2){
        console.log('Resposta Exercício 5 (b): ',true)

    }else{
        console.log('Resposta Exercício 5 (b): ',false)
    }
 
    return
}

numeros2(1,2)

//c

let nome = "Mário"
function repita(){
    let contador =0
    while (contador<10){
    console.log('Resposta do Exercício 5 (c): ',nome)  
    contador = contador +1}
}
 
repita()

//Exercício 6

const numerais = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function recebe(){
    let quantidade = []
    quantidade.push(numerais)
    console.log(quantidade)
  

    
    return 
}

recebe()



  