/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//Inicio do jogo

console.log("Bem vindo ao jodo de Blackjack!")

if(confirm('Quer iniciar uma nova rodada?')){
  const carta = comprarCarta()
  const carta2 = comprarCarta()
  const carta3 = comprarCarta()
  const carta4 = comprarCarta()
  
  

  console.log('Usuário - cartas: ', carta.texto + carta2.texto, '- pontuação',carta.valor + carta2.valor)
  console.log('Computador - cartas: ', carta3.texto + carta4.texto, '- pontuação',carta3.valor + carta4.valor)
 
  
  while(carta.valor + carta2.valor === carta3.valor + carta4.valor ){
     console.log('Empate!')
     break
  
   }
   while(carta.valor + carta2.valor > carta3.valor + carta4.valor ){
      console.log(" O usuário ganhou!")
      break
   }
   while(carta.valor + carta2.valor < carta3.valor + carta4.valor ){
      console.log("O computador ganhou!")
   break
}

   }else{
   console.log("O jogo acabou")
}