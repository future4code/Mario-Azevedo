

const criarPost = () =>{
    const titulo = document.getElementById('titulo-post')
    const autor = document.getElementById('autor-post')
    const conteudo = document.getElementById('conteudo-post')

    let informacao = [titulo.value,autor.value,conteudo.value]
    titulo.value = ''
    autor.value = ''
    conteudo.value = ''

    console.log(informacao)
}