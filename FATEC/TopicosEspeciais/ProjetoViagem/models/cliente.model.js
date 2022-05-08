let mongoose = require('mongoose')

let Schema = mongoose.Schema

let clienteSchema = new Schema({
    rg: {type: Number, required: true},
    nome: {type: String, required:true},
    endereco:{type: String, required:true}
})

module.exports = mongoose.model('Cliente', clienteSchema)