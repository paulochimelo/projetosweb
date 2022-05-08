import React from 'react'


export default props =>
<div>
    <h1>Nome do Pai: {props.nome} Sobrenome: {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <u1>
        {
        React.Children.map(props.Children, child => {
            return React.cloneElement(child, {
                ...props, ...child.props
            })
        })
        }
    </u1>
</div>