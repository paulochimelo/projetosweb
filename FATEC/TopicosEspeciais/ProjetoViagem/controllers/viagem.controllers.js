const Viagem = require("../models/viagem.model")

let viagemController = {
    insere: async(req, res) => {
    let viagem = Viagem({
        cidade: req.body.nome,
        data: req.body.data,
        preco: req.body.preco
    })
    viagem.save()
    res.json(viagem)
    },
    consulta: async(req, res) => {
        Viagem.find()
        .then(viagem => {
            res.json(viagem)
        })
    },
    remove: async(req, res) =>{
        Viagem.deleteOne({_id: req.params._id})
        .then(resultado => {
            console.log(`Viagem removida`)
            res.json(resultado)
        })
    },
    atualiza: async(req, res) => {
        Viagem.updateOne(
            {_id: req.params._id}, {
                cidade: req.body.cidade,
                data: req.body.data,
                preco: req.body.preco
            }
        )
        .then(resultado => {
            console.log(`Atualização concluida`)
            res.json(resultado)
        })
    }
}

module.exports = viagemController