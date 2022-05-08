import React from 'react'

export default props=>(
    <h2>
        <p>
        Marca = {props.marca}
        </p>
        <p>
        Modelo = {props.modelo}
        </p>
        <p>
        Velocidade = {props.velocidade}
        </p>
        <p>
        Ano = {props.ano}
        </p>
    </h2>
)