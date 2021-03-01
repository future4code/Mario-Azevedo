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
        console.log(resultado)
    }
}

numeros2(4,4)

