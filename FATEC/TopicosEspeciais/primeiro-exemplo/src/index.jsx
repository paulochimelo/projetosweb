//vamos importar a classe react da biblioteca react
import React from 'react'
//vamos importar a classe reactdom da biblioteca react-dom
import ReactDom from 'react-dom'
//vamos exportar o componente Primeiro
import Primeiro from './Primeiro'

import Segundo from './Segundo'


import Terceiro from './Terceiro'

import Carro from './Carro'

import Saudacoes from './Saudacoes'
//vamos usar o componente, executqando a funçao para que a mensagem apareca para o usuario
//o compomente é utilizado dentro da função render para aparecer ao usuário
//na pasta public, tem um arquivo chamado index.html. Neste arquivo, tem uma div cuo id e root.
//portanto, o que será mostrado ao usuário estará localizado na div

//quando usamos 2 ou mais elementos precisamos colocar um elemento pai para eles, como a div
//alem do div podemos utilizar um recurso do proprio react
ReactDom.render(
    <React.Fragment>
        <Primeiro/>
        <Segundo/> 
        <Terceiro nome = "Judas" endereco="Galileia" telefone="994119913"/>
        <Carro marca="GM" modelo="Onix" velocidade="200" ano = '2018'/>
        <Saudacoes.BoaNoite nome="Paulo"/>
        <Saudacoes.BoaTarde nome="Paulo"/>
        <Saudacoes.BomDia nome="Paulo"/>
    </React.Fragment>, document.getElementById("root"))