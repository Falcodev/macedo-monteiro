const mongoose = require("../database");

// Cria o schema dos clientes
const ClienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contato: {
    type: String,
    required: true,
  },
  cpf_cnpj: {
    type: Number,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Cliente", ClienteSchema);
