const Pendencias = require("../models/Pendencias");
const Chat = require("../models/Chat");

module.exports = {
  async create(request, response) {
    let res = undefined;
    try {
      res = await Pendencias.create(request.body);

      const chat = {
        idPendencia: res._id.toString(),
        chat: request.body.chat,
      };
      const res2 = await Chat.create(chat);

      return response.send({ res, res2 });
    } catch (err) {
      if (res) await Pendencias.findByIdAndDelete(res._id);

      return response
        .status(400)
        .send({ error: "Erro no cadastro da pendencia. " });
    }
  },

  async get(request, response) {
    const { id } = request.params;

    try {
      const pendencia = await Pendencias.findById(id);
      const chat = await Chat.find({ idPendencia: id });
      return response.send({ pendencia, chat });
    } catch (err) {
      console.log(err);
      return response
        .status(400)
        .send({ error: "Erro ao requisitar a pendência. " });
    }
  },

  async index(request, response) {
    try {
      const res = await Pendencias.find();
      return response.send({ res });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro ao requisitar pendencias. " });
    }
  },
};
