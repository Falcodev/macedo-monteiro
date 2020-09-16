const bcrypt = require("bcryptjs");
const autoIncrement = require("mongoose-auto-increment");

const mongoose = require("../database");

autoIncrement.initialize(mongoose);

// Cria um schema de usuário que contém os atributos {nome, email, senha e código}
const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  senha: {
    type: String,
    required: true,
    select: false,
  },
  codigo: {
    type: Number,
    required: true,
  },
  representacao: {
    type: Number,
    required: true,
  },
  cotas: {
    type: Number,
    required: true,
  },
});

UserSchema.plugin(autoIncrement.plugin, { model: "User", field: "codigo" });

// Antes de criar um Usuário, a senha será encriptada
UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;
  next();
});

module.exports = mongoose.model("User", UserSchema);
