const Grupo = require("../models/Grupo");

module.exports = {
  async create(request, response) {
    try {
      const conta = await Grupo.create(request.body);
      return response.send({ conta });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro no cadastro do grupo. " });
    }
  },

  async get(request, response) {
    const { id } = request.params;

    try {
      const res = await Grupo.findById(id);
      return response.send({ res });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro ao requisitar o grupo. " });
    }
  },

  async index(request, response) {
    try {
      const res = await Grupo.find();
      return response.send({ res });
    } catch (err) {
      return response.status(400).send({ error: "Erro ao requisitar grupo. " });
    }
  },
};
