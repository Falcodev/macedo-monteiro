const Ativos = require("../models/Ativos");

const generateSKU = require("../services/skuService");

module.exports = {
  async create(request, response) {
    try {
      const ativo = await Ativos.create(request.body);

      let ativoSKU;
      if (!request.body.sku) {
        const sku = await generateSKU(ativo);
        ativoSKU = await Ativos.findByIdAndUpdate(
          ativo._id,
          { sku: sku },
          { new: true }
        );
      }
      return response.send({ ativoSKU });
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
    const { id } = request.params;

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
