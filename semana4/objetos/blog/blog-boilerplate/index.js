
/* 
const criarPost = () =>{
    const titulo = document.getElementById('titulo-post')
    const autor = document.getElementById('autor-post')
    const conteudo = document.getElementById('conteudo-post')
    const container = document.getElementById('container-de-posts')
    const imagem = document.getElementById('imagem')

    let informacao = [titulo.value,autor.value,conteudo.value]
    titulo.value = ''
    autor.value = ''
    conteudo.value = ''

    container.innerHTML += `<p> ${informacao}</p>`
    container.innerHTML += `<img src=${imagem.value}>`

    console.log(informacao)
} */

//Desafio

const criarPost = () =>{
    const titulo = document.getElementById('titulo-post')
    const autor = document.getElementById('autor-post')
    const conteudo = document.getElementById('conteudo-post')
    const container = document.getElementById('container-de-posts')
    const imagem = document.getElementById('imagem')

    let informacao = [titulo.value,autor.value,conteudo.value]
    titulo.value = ''
    autor.value = ''
    conteudo.value = ''

    container.innerHTML += `<p> ${informacao}</p>`
    container.innerHTML += `<img src=${imagem.value}>`

    
} 