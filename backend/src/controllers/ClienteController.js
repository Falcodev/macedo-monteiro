const Cliente = require("../models/Cliente");

module.exports = {
  async create(request, response) {
    try {
      const ativo = await Cliente.create(request.body);
      return response.send({ ativo });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro no cadastro do cliente. " });
    }
  },

  async update(request, response) {
    const { id } = request.body;

    try {
      const res = await Cliente.findByIdAndUpdate(id, request.body, {
        new: true,
      });
      return response.send({ res });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro ao atualizar o ativo. " });
    }
  },

  async get(request, response) {
    const { id } = request.body;

    try {
      const res = await Cliente.findById(id);
      return response.send({ res });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro ao requisitar o cliente. " });
    }
  },

  async index(request, response) {
    try {
      const res = await Cliente.find();
      return response.send({ res });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro ao requisitar clientes. " });
    }
  },
};
