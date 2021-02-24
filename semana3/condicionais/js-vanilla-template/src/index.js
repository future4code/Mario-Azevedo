//Exercício 1
/* O código verifica se o número é par, ele realiza o teste de divisão e resto
Todo número par quando submetido a uma divisão por 2 o resto é obrigatoriamente 0, e é isso que o 
teste faz. 
Ele imprimirá no console Passou no teste todos os números que o resto seja 0, ou seja par
E imprimirá no console Não passou no teste para todos os números que o resto seja diferente
de 0, ou seja impares */

/* //Exercício 2
Código para consulta de preço das frutas
O preço da fruta maça é R$ 2.25
O preço da fruta pera é R$ 5
 */

 //Exercício 3
 /*    A primeira linha está pedindo ao usuário 
    para digitar um número e convertendo a string 
    em um Number
    Para 10 - Esse número passou no Teste
    Para -10 - Não irá aparecer mensagem 
    Haverá um erro na identificação da mensagem
    quando a comparação numero>0 ocorrer o let mensagem
    não será verificado, para que a mensagem let mensagem
    ocorrece seria necessário que let mensagem estivesse fora
    do bloco if
    */

/* //Exercício 4

const idade = Number(prompt('Qual a sua idade?'))
const dirigir = 18

if(idade >= dirigir){
    console.log('Você pode dirigir')
}else{
    console.log('Você não pode dirigir')
}
 */

/*  //Exercício 5

 let periodo = prompt("Infome o turno do seu estudo - M para matutino, V para vespertino e N para noturno")
 const matutino = 'M'
 const vespertino = 'V'
 const noturno = 'NMM'

 if(periodo === matutino){
     console.log('Bom dia')
 }else if(periodo === vespertino){
     console.log('Boa Tarde')
 }else{
     console.log('Boa noite')
 }
 */

 //Exercício 6

 
/*  let periodo = prompt('Qual o periodo que você estuda? M - Matutino, V - Vespertino, N - Noturno')
 
 switch(periodo){
     case 'M': 
     console.log("Bom dia!")
     break

     case "V":
     console.log("Boa tarde!")
     break

     case 'N':
     console.log('Boa noite!')
     break

     default:
         console.log('Digite uma opção valida!')
    }

 */

 //Exercício 7
/* 
 let filme = prompt('Qual o estilo de filme você quer assistir?')
 let preco = prompt('Qual o valor máximo que você pagaria no ingresso?')

 const tipofilme ='fantasia'
 const precomax = 15

 if(filme ===tipofilme && preco <precomax){
     console.log('Bom filme!')
 }else{
     console.log('Escolha outro filme:(')
 } */

 // Desafios

 //Desafio 1

/*  let filme = prompt('Qual o estilo de filme você quer assistir?')
 let preco = Number(prompt('Qual o valor máximo que você pagaria no ingresso?'))
 
 const tipoFilme = 'fantasia'
 const precoMax = 15

 if(filme === tipoFilme && preco < precoMax){
 let snack = prompt('Qual snack que você quer comprar?')
 console.log( 'Bom filme! ...com', snack)
 }else{
     console.log('Escolha outro filme :(')
 }
 */

 //Desafio 2
 let aviso = prompt('Todas as respostas devem ser dadas em MAIUSCULO!')
 let nome = prompt('Qual seu nome completo?')
 let jogo = prompt('Qual o tipo do jogo IN (Internacional) ou DO (Doméstico)')
 let etapa = prompt('Para qual etapa: SF (Semi-final), DT (Disputa terceiro lugar) ou FI (Final)?')
 let ingressos = Number(prompt('Quantos ingressos?'))
 let categoria = Number(prompt('Qual categoria? Escollha de 1 a 4'))
 

 //NACIONAL
 switch(jogo){
     case 'DO':
    console.log('---Dados da compra---')
    console.log('Nome do clinte: ',nome)
    console.log('Tipo do jogo: Nacional')
    console.log('Etapa do jogo: ',etapa)
    console.log('Categoria: ',categoria)
    console.log('Quantidade de Ingressos: ',ingressos)
    break
    }
    switch(etapa){
      case 'SF': //SEMI FINAL
    break 
   }
   switch(categoria){
       case 1:
    console.log('---Valores---')
    console.log('Valor do ingresso: R$1320')
    console.log('Valor total: ','R$', (1320*ingressos))
    break

    case 2:
        console.log('---Valores---')
        console.log('Valor do ingresso: R$880')
        console.log('Valor total: ','R$', (880*ingressos))
        break

    case 3:
        console.log('---Valores---')
        console.log('Valor do ingresso: R$550')
        console.log('Valor total: ','R$', (550*ingressos))
        break

    case 4:
        console.log('---Valores---')
        console.log('Valor do ingresso: R$220')
        console.log('Valor total: ','R$', (220*ingressos))
        break
   }

   switch(etapa){
    case 'DT': //DISPUTA TERCEIRO LUGAR
  break 
 }
 switch(categoria){
     case 1:
  console.log('---Valores---')
  console.log('Valor do ingresso: R$660')
  console.log('Valor total: ','R$', (660*ingressos))
  break

  case 2:
      console.log('---Valores---')
      console.log('Valor do ingresso: R$440')
      console.log('Valor total: ','R$', (440*ingressos))
      break

  case 3:
      console.log('---Valores---')
      console.log('Valor do ingresso: R$330')
      console.log('Valor total: ','R$', (330*ingressos))
      break

  case 4:
      console.log('---Valores---')
      console.log('Valor do ingresso: R$170')
      console.log('Valor total: ','R$', (170*ingressos))
      break
 }

 switch(etapa){
    case 'FI': //FINAL
  break 
 }
 switch(categoria){
     case 1:
  console.log('---Valores---')
  console.log('Valor do ingresso: R$1980')
  console.log('Valor total: ','R$', (1980*ingressos))
  break

  case 2:
      console.log('---Valores---')
      console.log('Valor do ingresso: R$1320')
      console.log('Valor total: ','R$', (1320*ingressos))
      break

  case 3:
      console.log('---Valores---')
      console.log('Valor do ingresso: R$880')
      console.log('Valor total: ','R$', (880*ingressos))
      break

  case 4:
      console.log('---Valores---')
      console.log('Valor do ingresso: R$330')
      console.log('Valor total: ','R$', (330*ingressos))
      break
 }

 //INTERNACIONAL

 switch(jogo){
    case 'IN':
   console.log('---Dados da compra---')
   console.log('Nome do clinte: ',nome)
   console.log('Tipo do jogo: Nacional')
   console.log('Etapa do jogo: ',etapa)
   console.log('Categoria: ',categoria)
   console.log('Quantidade de Ingressos: ',ingressos)
   break
   }
   switch(etapa){
     case 'SF': //SEMI FINAL
   break 
  }
  switch(categoria){
      case 1:
   console.log('---Valores---')
   console.log('Valor do ingresso: U$5412')
   console.log('Valor total: ','U$', (5412*ingressos))
   break

   case 2:
       console.log('---Valores---')
       console.log('Valor do ingresso: U$3608')
       console.log('Valor total: ','U$', (3608*ingressos))
       break

   case 3:
       console.log('---Valores---')
       console.log('Valor do ingresso: U$2255')
       console.log('Valor total: ','U$', (2255*ingressos))
       break

   case 4:
       console.log('---Valores---')
       console.log('Valor do ingresso: U$902')
       console.log('Valor total: ','U$', (902*ingressos))
       break
  }

  switch(etapa){
   case 'DT': //DISPUTA TERCEIRO LUGAR
 break 
}
switch(categoria){
    case 1:
 console.log('---Valores---')
 console.log('Valor do ingresso: U$2706')
 console.log('Valor total: ','U$', (2706*ingressos))
 break

 case 2:
     console.log('---Valores---')
     console.log('Valor do ingresso: U$1804')
     console.log('Valor total: ','U$', (1804*ingressos))
     break

 case 3:
     console.log('---Valores---')
     console.log('Valor do ingresso: U$1353')
     console.log('Valor total: ','U$', (1353*ingressos))
     break

 case 4:
     console.log('---Valores---')
     console.log('Valor do ingresso: U$697')
     console.log('Valor total: ','U$', (697*ingressos))
     break
}

switch(etapa){
   case 'FI': //FINAL
 break 
}
switch(categoria){
    case 1:
 console.log('---Valores---')
 console.log('Valor do ingresso: U$8118')
 console.log('Valor total: ','U$', (8118*ingressos))
 break

 case 2:
     console.log('---Valores---')
     console.log('Valor do ingresso: U$5412')
     console.log('Valor total: ','U$', (5412*ingressos))
     break

 case 3:
     console.log('---Valores---')
     console.log('Valor do ingresso: U$3608')
     console.log('Valor total: ','R$', (3608*ingressos))
     break

 case 4:
     console.log('---Valores---')
     console.log('Valor do ingresso: U$1353')
     console.log('Valor total: ','R$', (1353*ingressos))
     break

    }



