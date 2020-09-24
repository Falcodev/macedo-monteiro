const ContasReceber = require("../models/ContasReceber");

const calcularJuros = require("../utils/calcularJuros");

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

  async get(request, response) {
    const { id } = request.params;

    try {
      const res = await ContasReceber.findById(id);
      return response.send({ res });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro ao requisitar a conta. " });
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

  async complete(request, response) {
    const {
      id,
      dataVencimento,
      dataRecebimento,
      valor,
      desconto,
      juros,
      multa,
      situacao,
    } = request.body;

    let total;
    total =
      valor +
      calcularJuros(dataVencimento, dataRecebimento, situacao, valor, juros) -
      desconto +
      valor * multa;

    const res = await ContasReceber.findByIdAndUpdate(
      id,
      {
        dataRecebimento,
        desconto,
        juros,
        multa,
        total,
        situacao: "pago",
      },
      { new: true }
    );

    return response.send({ res });
  },
};
