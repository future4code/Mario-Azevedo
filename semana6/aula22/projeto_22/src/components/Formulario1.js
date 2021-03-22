import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content:center;
flex-direction: column;
margin-top: 20px;
`;

const Input = styled.input`
    width:200px;
    margin:auto;
    margin-top:20px;
`;

const Label = styled.label`
    font-size: 20px;
    margin: auto;
    margin-top: 20px;
`;

const Form = styled.form`
   width:200px;
    margin:auto;
    margin-top:20px;
`;

const Select = styled.select `
font-size: 15px;
`;

const H2 = styled.h2`
    margin: auto;
`;

export class Formulario1 extends React.Component{
    render(){
        
        return(
            <Container>

            <H2>ETAPA 1 - DADOS GERAIS</H2>
            <Label>1 - Qual seu nome?</Label>
            <Input type="text"></Input>
            <Label>2 - Qual sua idade?</Label>
            <Input type="text"></Input>
            <Label>3 - Qual seu e-mail?</Label>
            <Input type="text"></Input>
            <Label>4 - Qual sua escolaridade?</Label>

           <Form>
               <Select>
               <option>Ensino médio incompleto</option>
                <option>Ensino médio completo</option>
                <option>Ensino Superior incompleto</option>
                <option>Ensino Superior completo</option>
               </Select>                
            </Form>

            
        </Container>
        )
    }
}