const mongoose = require("../database");

// Cria um schema de ativos
const AtivosSchema = new mongoose.Schema({
  // Geral
  apelido: String,
  endereco: {
    type: String,
    required: true,
  },
  bairro: {
    type: String,
    required: true,
  },
  cep: Number,
  municipio: {
    type: String,
    required: true,
  },
  coordenadas: [Number],

  // Status
  disponibilidade: String,
  titular: String,
  valor: Number,

  sku: {
    type: String,
    required: true,
  },
  inscricao: String,
  dataAquisicao: {
    type: Date,
    required: false,
  },
  valorMatricula: Number,
  area: Number,

  // Avaliação
  valorIPTU: Number,
  mercado: Number,

  // Proprietário
  nomeMatricula: String,
  nomeIPTU: String,
  escritura: String,
  cartorioDeRegistro: String,

  observacao: String,
});

module.exports = mongoose.model("Ativos", AtivosSchema);
