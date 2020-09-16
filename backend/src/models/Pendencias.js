const mongoose = require("../database");

// Cria um schema de ativos
const PendenciasSchema = new mongoose.Schema({
  solicitante: {
    type: String,
    required: true,
  },
  assunto: {
    type: String,
    required: true,
  },
  opcao: {
    type: String,
    required: true,
  },
  situacao: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Pendencias", PendenciasSchema);
