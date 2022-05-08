//importa os pacotes necessarios
import React from 'react'
import {Component} from 'react'
//cria uma classe que é um componente
export default class Produto extends Component{

    constructor(){
        super() //chama construtor da classe componente
        //define quais as variaves da classe e quais podem ser alteradas
        this.state = {
            nome: "padrao",
            qtd: 0,
            preco:0,
            total:0,
            tipo: "Digite um tipo",
            pagto: "Boleto bancario",
            filial: "Filial 1"
        }
    }

    //vamos criar os setter das variaveis 
    //e -> evento gerado (digitação na caixa de texto)
    setFilial(e){
        this.setState({
            filial: e.target.value + this.state.filial
        })
    }

    setPagto(e){
        this.setState({
            pagto: e.target.value
        })
    }

    setTipo(e){
        this.setState({
            tipo: e.target.value//recupera o valor selecionado pelo usuario e atribui a variavel tipo
        })
    }
    setName(e){
        this.setState({
            nome: e.target.value//recupera o digitado na caixa de texto e atribui á varivael nome
        })
    }
    setQtd(e){
        this.setState({
            qtd: e.target.value
        })
    }

    setPreco(e){
        this.setState({
            preco: e.target.value
        })
    }
    calcular(e){
        this.setState({
            total: this.state.preco * this.state.qtd
        })

    }

    render(){
        return(
            <div>
                <h2>Nossa primeira classe do tipo componente</h2>
                <h3>
                    <label>Nome</label>
                    <input type="text" value={this.state.nome} onChange={ e => this.setName(e)}/>
                </h3>
                <h3>
                    <label>Quantidade</label>
                    <input type="number" value={this.state.qtd} onChange={ e => this.setQtd(e)}/>
                </h3>
                <h3>
                    <label>Preço</label>
                    <input type="number" value={this.state.preco} onChange={ e => this.setPreco(e)}/>
                </h3>
                <h3>
                    Selecione o tipo <select onChange={e => this.setTipo(e)}>
                        <option value="Congelados">Congelados</option>
                        <option value="Bebidas">Bebidas</option>
                        <option value="Higiene">Higiene</option>
                        <option value="Saude">Saude</option>
                        <option value="Legumes">Legumes</option>
                        
                    </select>
                </h3>
                <h3>
                    <input type = "radio" name = "pagto" value="Cartão de credito" onClick={ e => this.setPagto(e)}/>Cartão Credito
                    <input type = "radio" name = "pagto" value="Cartão de debito" onClick={ e => this.setPagto(e)}/>Cartão debito
                    <input type = "radio" name = "pagto" value="Boleto bancario" onClick={ e => this.setPagto(e)}/>Boleto
                </h3>
                <h3>
                    <input type = "checkbox" name = "filial" value = "Filial 1" onClick={e => this.setFilial(e)}/>Filial 1
                    <input type = "checkbox" name = "filial" value = "Filial 2" onClick={e => this.setFilial(e)}/>Filial 2
                    <input type = "checkbox" name = "filial" value = "Filial 3" onClick={e => this.setFilial(e)}/>Filial 3
                    <input type = "checkbox" name = "filial" value = "Filial 4" onClick={e => this.setFilial(e)}/>Filial 4
                    <input type = "checkbox" name = "filial" value = "Filial 5" onClick={e => this.setFilial(e)}/>Filial 5
                </h3>
                <h3>
                    <button type="button" onClick={e => this.calcular()}>Calcular</button>
                </h3>
                <h3>
                    <label> {this.state.filial} Tipo: {this.state.tipo} - {this.state.pagto} {this.state.total}</label>
                </h3>
            </div>
        )
    }
}