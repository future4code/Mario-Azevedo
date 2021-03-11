import React from 'react';
import './PessoasConhecidas.css'

function PessoasConhecidas(props) {
    return (
        <div className="PessoasConhecidas-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.profissao }</p>
            </div>
            </div>
          
    )
}

export default PessoasConhecidas;