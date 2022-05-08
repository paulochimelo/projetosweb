import React from 'react'

//componente com 3 funções
const BoaTarde = props => <h3>Boa tarde {props.nome}</h3>

const BomDia = props => <h3>Bom Dia {props.nome}</h3>

const BoaNoite = props => <h3>Boa Noite {props.nome}</h3>

//essas 3 funcoes podem ser utilizadas externamente
export default {BoaNoite, BomDia, BoaTarde}