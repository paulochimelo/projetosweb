//importação da importacao do0 mongoaw
const mongoose = require('mongoose')
//
mongoose.Promise = global.Promise
//conecta no BD
module.exports = mongoose.connect('mongodb://localhost/todo',
    {
        useUnifiedTopology: true,
        useNewUrlParser:true
    })