const Ativos = require("../models/Ativos");

module.exports = {
  async create(request, response) {
    try {
      const ativo = await Ativos.create(request.body);
      return response.send({ ativo });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro no cadastro do ativo. " });
    }
  },

  async update(request, response) {
    const { id } = request.body;

    try {
      const res = await Ativos.findByIdAndUpdate(id, request.body, {
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
      const res = await Ativos.findById(id);
      return response.send({ res });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro ao requisitar o ativo. " });
    }
  },

  async delete(request, response) {
    const { id } = request.body;

    try {
      const res = await Ativos.findByIdAndDelete(id);
      return response.send({ res });
    } catch (err) {
      return response.status(400).send({ error: "Erro ao deletar o ativo. " });
    }
  },

  async index(request, response) {
    try {
      const res = await Ativos.find();
      return response.send({ res });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro ao requisitar ativos. " });
    }
  },
};
