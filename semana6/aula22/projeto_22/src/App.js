import './App.css';
import {Formulario1} from './components/Formulario1'
import {Formulario2} from './components/Formulario2'
import {Formulario3} from './components/Formulario3'
import {Agradecimento} from './components/Agradecimento'
import styled from 'styled-components'
import React from 'react';

const Button = styled.button`
    width:150px;
    margin: auto;
    margin-top:40px;
`;

const Container = styled.div`
display: flex;
justify-content:center;
flex-direction: column;
`;

class App extends React.Component{
  state = { 
    etapa: 1,  
    botao:true,
  };

  renderizaEtapa = () => {
    switch(this.state.etapa){
      case 1: 
      return <Formulario1 />
      case 2:
        return <Formulario2 />
      case 3: 
        return <Formulario3 />
      case 4:
        return <Agradecimento />
      default:<div></div>
    }
  }

  irParaProximaEtapa = () =>{
    const etapa = this.state.etapa
    const novaEtapa = etapa + 1
    this.setState({etapa:novaEtapa})
    console.log(this.state.botao) 
   }

   botaoClicavel = () => {
     if(this.state.botao === false){
      <div>vazio</div>
     }else if (this.state.botao === true){
      return <Button onClick={this.irParaProximaEtapa}>Próxima etapa</Button>
     }
   }

    escondendoBotao = () => {
      const bot = this.state.etapa
     if(bot > 3){
       this.setState({botao:false})      
     } 
   }
  
 render(){
 
  return (

    <Container>
      
          {this.renderizaEtapa()}
          { this.escondendoBotao()} 
          { this.state.etapa > 3 && this.botaoClicavel() }
          
          
    </Container>
  )
}
}

export default App;
