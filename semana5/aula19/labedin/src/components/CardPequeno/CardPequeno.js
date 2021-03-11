import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="Pequenocard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.titulo }</h4>
                <p>{ props.email }</p>
            </div>
            <div>
            <h4>{ props.endereco }</h4>
            <p>{ props.local }</p>
            </div>
        </div>
    )
}

export default CardPequeno;