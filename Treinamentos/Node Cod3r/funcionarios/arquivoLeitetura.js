const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono... (não recomendado)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrona (recomendado)
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json')//traz o arquivo convertido para obejto
console.log(config.db) 

fs.readdir(__dirname, (err, arquivos)=>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})