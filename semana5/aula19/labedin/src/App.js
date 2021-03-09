import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import PessoasConhecidas from './components/PessoasConhecidas/PessoasConhecidas';
import Habilidades from './components/Habilidades/Habilidades';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://www.jornal.ecuesta.com.br/conteudo/humor/imagens/o-cachorro-do-politico.jpg" 
          nome="Mário Azevedo" 
          descricao="Oi, eu sou o Mário Azevedo. Sou o aluno da Labenu. Estou nessa empreitada do FullStack e acabamos de passar pelo módulo 1, que dureza!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">

        <CardPequeno 
        imagem = "https://bompracachorro.blogfolha.uol.com.br/files/2019/01/img_3684-1.jpg"
        titulo = "E-mail:"
        email = "caiafamariofilho@gmail.com"
        />

        <CardPequeno 
        imagem = "https://i.pinimg.com/originals/f4/7b/46/f47b469a8941a5fc8e24bfabae022bcd.jpg"
        endereco = "Enderço:"
        local = "Paraíba do Sul"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.hypeness.com.br/1/2020/03/ca%CC%83es-fazendo-home-office-5.png" 
          nome="Estudande FullStack" 
          descricao="Estudando firme para esse mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://img.elo7.com.br/product/244x194/1212120/quadro-cachorro-cientista-com-paspatur-pet.jpg" 
          nome="Gerente de Produção" 
          descricao="Gerenciamento de equipe e processos na fabriação de Saneantes." 
        />
      </div>

      <div className="habilidades">

      <Habilidades 
      imagem= "https://rapidapi.com/blog/wp-content/uploads/2018/06/logo-2582748_640.png"
      habilidade = "HTML"
      />

      <Habilidades 
      imagem= "data:image/png;base64,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"
      habilidade = "CSS"
      />

      <Habilidades
      imagem= "data:image/png;base64,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"
      habilidade = "JavaScript"
      />

    </div>
    <div className="conhecidos" >
    <h2>Talvez você conheça</h2>

    <div className ="boxconhecidos">

      <PessoasConhecidas
        imagem = "https://love.doghero.com.br/wp-content/uploads/2016/09/destaqueestilosos1.jpg"
        nome = "Totó Fagundes"
        profissao = "Ator"
      />

      <PessoasConhecidas
        imagem = "http://s2.glbimg.com/PNQc9kSyRkFdGxntPugLIQsF3gs=/620x620/smart/e.glbimg.com/og/ed/f/original/2016/03/04/cachorros_estilosos_do_instagram_2.jpg"
        nome = "Caramelo Zulu"
        profissao = "Modelo"

       />
        <PessoasConhecidas
        imagem = "https://live.staticflickr.com/6109/6253504294_8b5fb36421_z.jpg"
        nome = "Paulo Cachorro"
        profissao = "Escritor"
      />
      </div>
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
