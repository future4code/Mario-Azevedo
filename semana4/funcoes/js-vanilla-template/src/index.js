/* /* Exercício 1
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
/*
//Exercício 4
//(a)

let informacao = () => {
    console.log('Exercício 4 (a): Eu sou o Mário , tenho 23 anos, moro na cidade de Paraíba do Sul e estou estudante.')
}

informacao()

//(b)

  let nome  
  let idade  
  let endereco  
  let estudante 
  
  function informacao2(nome, idade, endereco, estudante){
      if(estudante === true){
          console.log('Exercício 4 (b): Eu sou o ',nome,' tenho ',idade,' anos, moro na cidade de ',endereco,' e estou estudante','.')
      }

  }
 
  informacao2('Mário', 36, 'Paraíba do Sul', true)

  //Exercício 5
  //(a)
  
  let numeros = (numero1,numero2) => {
      let soma = numero1 + numero2
      console.log('Exercício5 (a): ',soma)
      return soma
  }

  numeros(2,3)

//(b)

let numeros2 = (numero3,numero4) => {
    if(numero3>=numero4){
        let resultado = true
        console.log('Exercício 5 (b): ',resultado)
    }
}

numeros2(4,4)

//(c)



let repete = (nome) =>{
    for(let contador = 0; contador <10; contador ++){
        console.log(nome)
    }
    }

repete('Resposta Exercício 5 (c): Mário')

//Exercício 6

//(a)

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function quantidade(){
    console.log('Resposta Exercicio 6 (a): ',array.length)
}

quantidade()

//(b)

function conferencia(valor){
      if(valor%2 === 0){
        console.log('Resposta Exercício 6 (b): Este número é par: ',true)
    }else(
        console.log('Esse número é par: ',false)
    )

}

conferencia(20)

//(c)

let par = []
function pares(){
for (let lista of array){
    
    if(lista%2 === 0){
        let resultado = (lista%2 ===0)
        par.push(resultado)       
        

        
    }
    
 }
 console.log('Resposta Exercício 6 (c): A quantidade de números par é ',par.length)
}


pares(array)

//(d)


function compara(){
    for (let listagem of array){
        if(listagem%2===0){
            console.log('Resposta Exercício 6 (d): Esse número é par')
        }else(
            console.log('Resposta Exercício 6 (d) Esse número é impar')
        )
    }}

    compara(array) */



    //----------Inicio desafio-------//

//Exercício 1

let idade = (valor) => {
    let valor1 =valor 
    console.log('Resposta Exercicio 1 : ',valor1)    
 
    return valor
    }

idade(10)

let soma = (valor1,valor2) =>{
    let somados = valor1 + valor2
    idade(somados)
    
}

soma(3,4)

//Exercício 2

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

let ex2 = (numero) => {
    let par = []
    if(numero%2===0){       
        let valor = numero
        par.push(valor)
        
    }
    console.log(par)
}

ex2(numeros)