const bcrypt = require("bcryptjs");

const mongoose = require("../database/mongoDB");

// Cria um schema de usuário que contém os atributos {nome, email, senha e código}
const ResultadosSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  nomeDoArquivo: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  tamanho: Number,
});

module.exports = mongoose.model("Resultados", ResultadosSchema);
