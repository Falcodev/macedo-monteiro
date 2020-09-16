const mongoose = require("../database");
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose);

// Cria um schema de contas a receber
const ContasReceberSchema = new mongoose.Schema({
  valor: {
    type: Number,
    required: true,
  },
  pagador: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true,
  },
  dataVencimento: {
    type: Date,
    required: true,
  },
  dataRecebimento: Date,
  juros: {
    type: Number,
    required: true,
  },
  emissao: {
    type: Date,
    required: true,
  },
  cpf_cnpj: {
    type: Number,
    required: true,
  },
  condominio: Number,
  energia: Number,
  outros: Number,
  unidade: String,
});

ContasReceberSchema.plugin(autoIncrement.plugin, {
  model: "ContasReceber",
  field: "codigo",
});

module.exports = mongoose.model("ContasReceber", ContasReceberSchema);
