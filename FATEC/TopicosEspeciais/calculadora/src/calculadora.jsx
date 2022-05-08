import React from 'react'
import {Component} from 'react'

// cria classe para ser utilizada em outro arquivo
export default class Calculadora extends Component {
    // cria o construtor
    constructor(){
        super();
        this.state = {
            operando1: 0,
            operando2: 0,
            operador: '+',
            resultado: 0
        }
    }
    // setters das variáveis
    setOperando1(e){ // valor definido de acordo com entrada no formulário HTML
        this.setState({operando1: e.target.value})
    }
    setOperando2(e){ // valor definido de acordo com entrada no formulário HTML
        this.setState({operando2: e.target.value})
    }
    setOperador(e){ // valor definido de acordo com entrada no formulário HTML
        this.setState({operador: e.target.value})
    }
    setResultado(){ // valor calculado - não tem parâmetros de entrada
        switch(this.state.operador){
            case '+': this.setState({resultado: this.state.operando1 + this.state.operando2})
                        break
            case '-': this.setState({resultado: this.state.operando1 - this.state.operando2})
                        break
            case '*': this.setState({resultado: this.state.operando1 * this.state.operando2})
                        break
            case '/':   if (this.state.operando2 != 0){
                            this.setState({resultado: this.state.operando1 / this.state.operando2})
                        }
                        else {
                            this.setState({resultado: `Divisão por zero não é possível`})
                        }
                        break
        }
    }
    // vamos renderizar - mostrar ao usuário
    render(){
        // conteúdo que será retornado 
        return (
            <div>
                <div>
                    Operando 1: <input type="number" onChange={ e => this.setOperando1(e)} value={this.state.operando1}/>
                </div>
                <div>
                    Operando 2: <input type="number" onChange={ e => this.setOperando2(e)} value={this.state.operando2}/>
                </div>
                <div>
                    Operador 
                    <select onChange={ () => this.setOperador(e)}>
                        <option value="+"> + </option>
                        <option value="+"> - </option>
                        <option value="+"> * </option>
                        <option value="+"> / </option>
                    </select> 
                </div>
            </div>
        )
    }


}