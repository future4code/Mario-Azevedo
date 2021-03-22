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
    margin-top: 20px;
`;

const Form = styled.form`
    margin:auto;
    margin-top:20px;
`;

const Select = styled.select `
font-size: 15px;
width:200px;
`;

const H2 = styled.h2 `
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
`;

export class Formulario3 extends React.Component{
    render(){
        return(
            <Container>
                <H2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</H2>
                <Label>5 - Por que não terminou o curso de graduação?</Label>
                <Input type="text"/>
                <Label>6 -Você fez algum curso complementar?</Label>

                <Form>
                    <Select>
                        <option>Nenhum</option>
                        <option>Curso técnico</option>
                        <option>Curso de inglês</option>
                    </Select>
                </Form>

                
            </Container>
        )
    }
}