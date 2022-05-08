let express = require('express')

let servidor = express()

let bodyParser = require('body-parser')
servidor.use(bodyParser.urlencoded({extended: false}))
servidor.use(bodyParser.json())

let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/viagem',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let viagemController = require('./controllers/viagem.controllers')
let clienteController = require('./controllers/cliente.controllers')
const clienteModel = require('./models/cliente.model')

servidor.get('/viagem', viagemController.consulta)

servidor.post('/viagem', viagemController.insere)

servidor.delete('/viagem:id', viagemController.remove)

servidor.put('/viagem:id', viagemController.atualiza)

servidor.get('/cliente', clienteController.consulta)

servidor.post('/cliente', clienteController.insere)

servidor.delete('/cliente:id', clienteController.remove)

servidor.put('/cliente:id', clienteController.atualiza)

servidor.listen(3003, () => {
    console.log(`Servidor rodando com as rotas asa`)
})