import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Carta from '../image/carta.png'


const Geral = styled.div `
width: 700px;
height: 400px;
background-color: #EBEBEB;
border-radius: 10%;
display:flex;
`;

const Imagem = styled.div`
background-image: url(${Carta});
width: 40%;
height:100%;
background-size:100% 100%;
`;

const Cadastro = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
text-align:center;
width: 60%;
height:100%auto;
`;

const Titulo = styled.h4`
font-size:35px;
color: #333;
`;

const Ident = styled.label`
color: #333;
font-size:25px;
margin-bottom: 15px;
`;

const Desc = styled.input`
width: 80%;
height: 40px;
margin-bottom:30px;
`;

const Botao = styled.button`
background-color:#0F4DA2;
color: white;
width: 50%;
height: 10%;
margin-bottom:15px;
`;

const Deletar = styled.div`
display:flex;
flex-direction:row;
width: 500px;
justify-content: space-around;
align-items: center;
margin:auto;
`;

const Nomes = styled.li`
width:100%;
height:30px;
border: 1px solid white;
list-style-type:none;
font-size:15px;
color:white;
background-color:#0F4DA2;
text-transform: uppercase;
`;

const Botao2 = styled.button`
 height: 30px;
 background-color:#0F4DA2;
 color:white;
`;

const Ir = styled.b`
font-size:15px;
cursor: pointer;

`;

export class Formulario extends React.Component{

       state = {
        usuarios: [],
        inputNome: '',
        inputEmail:'',
        inicial: true,
      
    };

    componentDidMount = () => {
        this.getListaVoluntarios()
    };

     getListaVoluntarios = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: 'mario-azevedo-cruz'
            }
        }).then((resposta) =>{
           this.setState({usuarios: resposta.data})
           this.setState({inputNome:''})   
           this.setState({inputEmail: ''})       
        })
    }

    InputNome = (event) => {
        this.setState({inputNome: event.target.value})
    }

    InputEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }

    criandoUsuario = () => {
        const body ={
            name: this.state.inputNome,
            email: this.state.inputEmail,
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
                Authorization: 'mario-azevedo-cruz'
            }
        }).then((mensagem) => {
            this.getListaVoluntarios()
            alert("Obrigado por se cadastrar!")
        }).catch((erro) => {
            alert('Atenção - Voluntário não cadastrado', erro.response.data)
        })
    };

    paginaInicial = () =>{
        this.setState({inicial:true})
    }

    paginaVoluntario = () => {
        this.setState({inicial:false})
    }

    deletarUsuario = (id) =>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,{
            headers: {
                Authorization: 'mario-azevedo-cruz'
            }
        }).then((resposta)=> {
            if(window.confirm ("Você gostaria de deletar esse voluntário?")){
                alert("Voluntário deletado com sucesso!")
            this.getListaVoluntarios()}
        })
    }


    render(){               
        
        const listaVoluntarioFinal = this.state.usuarios.map((pessoas) => {
            return(
                <Deletar key={pessoas.id}>
                    <Nomes key={pessoas.id}>{pessoas.name}</Nomes> <Botao2 onClick={() => this.deletarUsuario(pessoas.id)}>Deletar</Botao2>                                       
                </Deletar>
               
            )           
            
        });

        return(

            <div>             
           
           {this.state.inicial &&   
          
          ( <Geral>

            <Imagem/>
            <Cadastro>
            <Titulo>Seja nosso Voluntário!</Titulo>
            <Ident>Qual seu nome?</Ident>
             <Desc onChange={this.InputNome}  value ={this.state.inputNome} placeholder={'Digite seu nome aqui! :)'} />
            <Ident>Agora digite seu e-mail!</Ident>
            <Desc onChange={this.InputEmail} value ={this.state.inputEmail} type='email'  placeholder= {'Digite seu e-mail aqui! :)'}/>
            <Botao onClick={this.criandoUsuario}  >Cadastrar!</Botao>
            </Cadastro>           

        </Geral>) }

            {!this.state.inicial && this.state.usuarios.length >0 ? <ul>{listaVoluntarioFinal}  <Ir onClick={this.paginaInicial}>Clique aqui para voltar ao formulário!</Ir></ul> :<Ir onClick={this.paginaVoluntario}>Clique aqui para ir a nossa lista de Voluntários!</Ir>}       
                 
          
        </div>
           
        )
    };
}
