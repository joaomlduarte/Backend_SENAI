// Estrutura para salvar a imagem no banco de dados
const mongoose = require('mongoose')  // Cria a variável que irá criar o modelo para salvar os dados
const GameSchema = new mongoose.Schema({
    name:{type: String, required: true},
    value:{type: Number, required: true},
    year:{type: Number, required: true},
    rating:{type: Number, required: true},
    image:{type: String, required: true}
})

module.exports = mongoose.model('Game', GameSchema)