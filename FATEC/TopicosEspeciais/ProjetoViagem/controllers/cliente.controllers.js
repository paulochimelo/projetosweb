const Cliente = require('../models/cliente.model')


let clienteController = {
    insere: async(req, res) => {
    let cliente = Cliente({
        rg: req.body.rg,
        nome: req.body.nome,
        endereco: req.body.endereco
    })
    cliente.save()
    res.json(cliente)
    },
    consulta: async(req, res) => {
        Cliente.find()
        .then(cliente => {
            res.json(cliente)
        })
    },
    remove: async(req, res) =>{
        Cliente.deleteOne({_id: req.params._id})
        .then(resultado => {
            console.log(`Viagem removida`)
            res.json(resultado)
        })
    },
    atualiza: async(req, res) => {
        Cliente.updateOne(
            {_id: req.params._id}, {
                rg: req.body.rg,
                nome: req.body.nome,
                endereco: req.body.endereco
            }
        )
        .then(resultado => {
            console.log(`Atualização concluida`)
            res.json(resultado)
        })
    }
}

module.exports = clienteController