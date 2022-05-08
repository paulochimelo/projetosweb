let mongoose = require('mongoose')

let Schema = mongoose.Schema
let Medico = require('/medico.model')

let viagemSchema = new Schema({
    cidade: {type: String, require : true},
    data: {type: Date, require: true},
    preco: {type: Number, require: true},
    medico: {type: Schema.Types.ObjectId, ref: 'Medico'}
})

module.exports = mongoose.model('Viagem',viagemSchema)

