const autoIncrement = require("mongoose-auto-increment");

const mongoose = require("../database");

autoIncrement.initialize(mongoose);

// Cria um schema de ativos
const AtivosSchema = new mongoose.Schema({
  // Geral
  idGrupo: String,
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

  sku: String,
  codigo: Number,
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

if (!this.idGrupo && !this.sku && !this.escritura) {
  AtivosSchema.plugin(autoIncrement.plugin, {
    model: "Ativos",
    field: "codigo",
  });
}

module.exports = mongoose.model("Ativos", AtivosSchema);
