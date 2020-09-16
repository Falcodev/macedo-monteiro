const mongoose = require("../database");

// Cria um schema de pendencias
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
  situacao: String,
  votos: [
    {
      idPessoa: { type: String, required: true },
      voto: { type: String, required: true },
      representacao: { type: Number, required: true },
    },
  ],
});

// Antes de criar uma Pendência, o número de votos será definido como 0
PendenciasSchema.pre("save", async function (next) {
  this.votos = [];
  this.situacao = "pendente";
  next();
});

module.exports = mongoose.model("Pendencias", PendenciasSchema);
