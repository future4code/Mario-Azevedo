

const criarPost = () =>{
    const titulo = document.getElementById('titulo-post')
    const autor = document.getElementById('autor-post')
    const conteudo = document.getElementById('conteudo-post')
    const container = document.getElementById('container-de-posts')

    let informacao = [titulo.value,autor.value,conteudo.value]
    titulo.value = ''
    autor.value = ''
    conteudo.value = ''

    container.innerHTML += `<p> ${informacao}</p>`

    console.log(informacao)
}