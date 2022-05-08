//import a dependencia body parser
const bodyParser = require('body-parser')
//import a dependencia do express
const express = require('express')
//criar o servidor
const servidor = express()
//configura o servidor com o bodyParser
servidor.use(bodyParser.urlencoded({extended: true}))
servidor.use(bodyParser.json())

//sobe o servidor para ficar ouvindo listen
//estamos criando uma função anônima -> sem nome
//dentro da função listen, estamos criando uma outra função anonima
servidor.listen(3003, function(){
console.log(`Servidor no ar com sucesso na porta 3003`)});