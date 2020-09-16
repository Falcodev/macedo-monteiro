const mongoose = require("../database");

// Cria o schema do chat
const ChatSchema = new mongoose.Schema({
  idPendencia: {
    type: String,
    required: true,
  },
  chat: {
    type: [
      {
        mensagem: { type: String, required: true },
        autor: { type: String, required: true },
        data: { type: Date, required: true },
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model("Chat", ChatSchema);
