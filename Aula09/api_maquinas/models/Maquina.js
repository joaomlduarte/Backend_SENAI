// importa biblioteca do mogoose
const mongoose = require("mongoose");
// Cria a estrutura (schema) para o documento da máquina
const MaquinaSchema = new mongoose.Schema({
    nome:{type: String, required: true}, // Nome da maquina
    tipo:{type: String, required: true}, // Tipo, ex impressora rotativa, etc
    status:{type: String, required: true}, // status, ativa, inativa, manutenção
    ultimaManutencao:{type: Date, required: true}, // Última manutenção
    proximaManutencaod:{type: Date, required: true} // Proxima manutenção
})

// Exporta o modelo Maquina
module.exports = mongoose.model("Maquina", MaquinaSchema)