const mongoose = require("../database/mongoDB");
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose);

// Cria um schema de contas a receber
const ContasPagarSchema = new mongoose.Schema({
  valor: {
    type: Number,
    required: true,
  },
  descricao: String,
  chaveDePagamento: {
    type: String,
    required: true,
  },
  pagador: {
    type: String,
    required: true,
  },
  codigo: {
    type: Number,
    required: true,
  },
  dataVencimento: {
    type: Date,
    required: true,
  },
  dataPagamento: Date,
  cpf_cnpj: {
    type: Number,
    required: true,
  },
  emissao: {
    type: Date,
    required: true,
  },
  situacao: String,
});

ContasPagarSchema.plugin(autoIncrement.plugin, {
  model: "ContasPagar",
  field: "codigo",
});

ContasPagarSchema.pre("save", async function (next) {
  this.situacao = "pendente";
  next();
});

module.exports = mongoose.model("ContasPagar", ContasPagarSchema);
