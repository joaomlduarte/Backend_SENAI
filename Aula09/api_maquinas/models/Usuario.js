// Cria o modelo para salvar o usuario

// Importa o mongoose para definição do schema e modelo
const mongoose = require("mongoose");

// Cria a estrutura schema para o documento de usuário
const UsuarioSchema = new mongoose.UsuarioSchema({
    nome:{type: String, required: true}, // Campo nome, obrigatorio e do tipo string
    nome:{type: String, required: true} // Campo email, obrigatorio e do tipo string
});

// Exporta o modelo Usuario que será utilizado nas rotas CRUD

module.exports = mongoose.model("Usuario", UsuarioSchema);