// vamos criar um servidor HTTP

const express = require('express')

const server = express()



// vamos colocar segurança no servidor

const cors = require('cors')

server.use(cors())



// vamos utilizar a dependência dos correios

let Correios = require('node-correios');

let correios = new Correios();



// criando uma rota GET

server.get('/cep', (req, res) => {​​

    correios.consultaCEP({​​cep: '14401295'}​​)

    .then(resultado => {​​

        console.log(resultado)

        res.send(resultado)

    }​​)

}​​)



// subir o servidor

server.listen(3000, resposta => {​​

    console.log(`Servindo running `)

}​​)