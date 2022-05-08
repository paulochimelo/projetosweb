import React from 'react'

import ReactDom from 'react-dom'

import Pai from './Pai'
import Filho from './Filho'

ReactDom.render(
    <div>
        <Pai nome="Julio" sobrenome="Oliveira">
            <Filho nome="Lucas"/>
            <Filho nome="Tiago"/>
            <Filho nome="Joao"/>
        </Pai>
        <Pai nome="Paulo" sobrenome="Chimelo">
            <Filho nome="Lucas"/>
            <Filho nome="Tiago"/>
            <Filho nome="Joao"/>  
        </Pai>
    </div>, document.getElementById("root")
)