import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content:center;
flex-direction: column;
`;

const Input = styled.input`
    width:200px;
    margin:auto;
    margin-top:20px;
`;

const Label = styled.label`
    font-size: 20px;
    margin: auto;
`;

const H2 = styled.h2`
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
`;

export class Formulario2 extends React.Component{
    render(){
        return(
            <Container>
                <H2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</H2>
                <Label>5 - Qual Cuso?</Label>
                <Input type="text" />
                <Label>6 - Qual a unidade de ensino?</Label>
                <Input type="text" />
                
                </Container>

        )     
    }
}