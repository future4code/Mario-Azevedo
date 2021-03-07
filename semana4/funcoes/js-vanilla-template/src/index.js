//REVISÂO

//Exercício 1

//(a)
//Será impresso: 10 e 50

//(b)
//Caso retire os console não será apresentado 
//nada em tela

//Exercício 2

//(a)
//Darvas e Caio

//(b)
//Amanda e Caio

//Exercício 3
//A função está verificando se os elementos são
//pares, caso positivo, eleva ele ao quadrado
//e armazena na varial arrayFinal.
//O melhor nome seria paresQuadrados

//Exercício 4

//(a)
let exercicio4a = () =>{
    console.log('Exercício 4 (a): Eu sou Caio, Tenho 23 anos, moro em São Paulo e sou estudante')
}
exercicio4a()

//(b)
let exercicio4b = (nome, idade, cidade, estudante) => {
    console.log(`Exercício 4 (b): Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}
   e ${estudante} estudante. `)
}
exercicio4b('Caio', 23, 'São Paulo', 'sou')

//Exercício 5

//(a)
let numeros = (numero1, numero2) =>{
    let soma = numero1 + numero2
    console.log('Exercicio 5 (a): ',soma)
    return soma
}
numeros (1,1)

//(b)
let numeros2 = (numero3, numero4) => {
    if(numero3 => numero4){
        console.log("Exercício 5 (b): ",true)
        return true
    }
}
numeros2(3,3)
numeros2(5,4)

//(c)

let imprime10 = (mensagem) =>{
    let contador = 0
    for(contador = 0; contador < 10; contador++){
        console.log('Exerciocio 5 (c): ', mensagem)
    }
}

imprime10('Imprime 10 vezes')

//Exercício 6

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//(a)
let quantidadeNoArray = (numeros) => {
    console.log('Resposta 6 (a)', numeros.length)
}
quantidadeNoArray(array)

//(b)

let verificaSePar = (numero) => {
    if(numero%2 === 0){
        console.log('Resposta: 6 (b) :',true)
    }
}
verificaSePar(2)

//(c)
let verificaArrayPar = (numeros) => {
    let numerosPares = []
    for(let numero of numeros){
        if(numero%2 === 0){
            numerosPares.push(numero)
        }
    }
    console.log('Exercicio6 (c):', numerosPares.length)
}
verificaArrayPar(array)

//Iniciando DESAFIO

