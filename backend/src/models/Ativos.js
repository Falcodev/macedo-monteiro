const mongoose = require("../database");

// Cria um schema de ativos
const AtivosSchema = new mongoose.Schema({
  // Geral
  apelido: {
    type: String,
    required: false,
  },
  endereco: {
    type: String,
    required: true,
  },
  bairro: {
    type: String,
    required: true,
  },
  cep: {
    type: Number,
    required: false,
  },
  municipio: {
    type: String,
    required: true,
  },
  coordenadas: {
    type: [Number],
    required: false,
  },

  // Status
  disponibilidade: {
    type: String,
    required: false,
  },
  titular: {
    type: String,
    required: false,
  },
  valor: {
    type: Number,
    required: false,
  },

  sku: {
    type: String,
    required: true,
  },
  inscricao: {
    type: String,
    required: false,
  },
  dataAquisicao: {
    type: Date,
    required: false,
  },
  valorMatricula: {
    type: Number,
    required: false,
  },
  area: {
    type: Number,
    required: false,
  },

  // Avaliação
  valorIPTU: {
    type: Number,
    required: false,
  },
  mercado: {
    type: Number,
    required: false,
  },

  // Proprietário
  nomeMatricula: {
    type: String,
    required: false,
  },
  nomeIPTU: {
    type: String,
    required: false,
  },
  escritura: {
    type: String,
    required: false,
  },
  cartorioDeRegistro: {
    type: String,
    required: false,
  },

  observacao: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Ativos", AtivosSchema);
