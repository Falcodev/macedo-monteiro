const Chat = require("../models/Chat");

module.exports = {
  async send(request, response) {
    const { chat, id } = request.body;
    try {
      const res = await Chat.findOneAndUpdate(
        { idPendencia: id },
        {
          $push: { chat: chat },
        },
        { new: true }
      );
      return response.send({ res });
    } catch (err) {
      return response.status(400).send({ error: "Erro ao mandar mensagem. " });
    }
  },

  async get(request, response) {
    const { idPendencia } = request.body;
    try {
      const res = await Chat.find({ idPendencia });
      return response.send({ res });
    } catch (err) {
      return response.status(400).send({ error: "Erro ao carregar chat. " });
    }
  },
};
