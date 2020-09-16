const ContasReceber = require("../models/ContasReceber");

module.exports = {
  async create(request, response) {
    try {
      const conta = await ContasReceber.create(request.body);
      return response.send({ conta });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro no cadastro da conta. " });
    }
  },

  async index(request, response) {
    try {
      const res = await ContasReceber.find();
      return response.send({ res });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro ao requisitar contas. " });
    }
  },
};
