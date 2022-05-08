const porta = 8080

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancodeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancodeDados.getProdutos())//Converte para Json
})

app.get('/produtos/:id', (req,res,next) =>{
    res.send(bancodeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next)=>{
    const produto = bancodeDados.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next)=>{
    const produto = bancodeDados.salvarProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next)=>{
    const produto = bancodeDados.excluirProdutos(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}`)
})
