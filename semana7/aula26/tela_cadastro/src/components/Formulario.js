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

const Ir = styled.h6`
font-size:12px;
`;

export class Formulario extends React.Component{

    state ={
        usuario:[],        
        inputNome:"",
        inputEmail:"",
    } 

    componentDidMount(){
        this.getListaVoluntario();
    }

    pegarInputNome =(event) => {       
        this.setState({inputNome: event.target.value})
    }

    pegarInputEmail =(event) => {
        this.setState({inputEmail: event.target.value})
     
    }

    getListaVoluntario = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
           headers: {
               Authorization: 'mario-azevedo-cruz'
           } 
        }).then((resposta) => {
            this.setState({usuario: resposta.data})
            
        })
    }
    


       cadastrarVoluntario = () => {
        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail,
        };
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "mario-azevedo-cruz"
            }
        }).then((resposta) => {
            this.getListaVoluntario()
            this.setState({inputValue:''})
            alert("Voluntário cadastrado com sucesso")
        })
        // console.log(this.state.inputNome)
        // console.log(this.state.inputEmail)


    }


    render(){
        return(
            <div> <Geral>

            <Imagem/>
            <Cadastro>
                <Titulo>Seja nosso Voluntário!</Titulo>
                <Ident>Qual seu nome?</Ident>
                <Desc onChange={this.pegarInputNome} value={this.state.inputNome} placeholder={'Digite seu nome aqui! :)'} />
                <Ident>Agora digite seu e-mail!</Ident>
                <Desc onChange={this.pegarInputEmail} type='email' value={this.state.inputEmail} placeholder= {'Digite seu e-mail aqui! :)'}/>
                <Botao onClick={this.cadastrarVoluntario}>Cadastrar!</Botao>
            </Cadastro>

        </Geral>

        <Ir>Gostaria de ir para a Página de Voluntários?</Ir>
        </div>
           
        )
    }
}
