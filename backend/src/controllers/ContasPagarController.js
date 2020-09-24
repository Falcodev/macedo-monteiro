const ContasPagar = require("../models/ContasPagar");

module.exports = {
  async create(request, response) {
    try {
      const conta = await ContasPagar.create(request.body);
      return response.send({ conta });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro no cadastro da conta. " });
    }
  },

  async get(request, response) {
    const { id } = request.params;

    try {
      const res = await ContasPagar.findById(id);
      return response.send({ res });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro ao requisitar a conta. " });
    }
  },

  async index(request, response) {
    try {
      const res = await ContasPagar.find();
      return response.send({ res });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro ao requisitar contas. " });
    }
  },

  async complete(request, response) {
    const { id } = request.body;
    const res = await ContasPagar.findByIdAndUpdate(
      id,
      {
        dataPagamento: new Date(),
        situacao: "pago",
      },
      { new: true }
    );

    return response.send({ res });
  },
};
