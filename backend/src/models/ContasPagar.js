const mongoose = require("../database");

// Cria um schema de ativos
const ContasPagarSchema = new mongoose.Schema({
  valor: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  codigoPagamento: {
    type: String,
    required: true,
  },
  sacado: {
    type: String,
    required: true,
  },
  codigo: {
    type: 
  }
});

module.exports = mongoose.model("ContasPagar", ContasPagarSchema);
