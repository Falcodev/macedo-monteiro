const autoIncrement = require("mongoose-auto-increment");

const mongoose = require("../database");

autoIncrement.initialize(mongoose);

// Cria um schema de usuário que contém os atributos {nome, email, senha e código}
const GrupoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true,
  },
  ativos: {
    type: [
      {
        idAtivo: { type: String, required: true },
        codigoAtivo: { type: Number, required: true },
      },
    ],
  },
});

GrupoSchema.plugin(autoIncrement.plugin, { model: "Grupo", field: "codigo" });

module.exports = mongoose.model("Grupo", GrupoSchema);
