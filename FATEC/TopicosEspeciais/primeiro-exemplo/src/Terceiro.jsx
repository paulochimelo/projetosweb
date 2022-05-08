import React from 'react'
//a nossa  função default vai receber parametros. Isso é importante pois mum outro componente
//que for utiliza-lo pode passar valores
//criamos uma arrow function (função com seta)
//substituimos as {} por () e tambem não usamos o return
//percebam que estamos utilizando uma função anônima - sem nome

export default props =>(
    <h2>
        Nome: {props.nome} Endereço: {props.endereco} Telefone: {props.telefone}
    </h2>
)