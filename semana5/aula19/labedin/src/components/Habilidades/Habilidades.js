import React from 'react';
import './Habilidades.css'

function Habilidades(props) {
    return (
        <div className="Habilidades-container">
             <img src={ props.imagem } />
            <div>               
            <h4>{ props.habilidade }</h4>
           </div>
        </div>
    )
}

export default Habilidades;