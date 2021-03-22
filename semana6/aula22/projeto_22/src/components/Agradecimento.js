import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    margin: auto;
    margin-top: 20px;
`;

const H2 = styled.h2 `
    text-align:center;
`;

export class Agradecimento extends React.Component{
    render(){
        return(
            <Container>
            <H2>O FORMULÁRIO ACABOU</H2>
            <p>Muito obrigado por participar! Entraremos em Contato!</p>
            </Container>
        )
    }
}