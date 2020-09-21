const Resultados = require("../models/Resultados");

const uploadFile = require("../services/uploadFile");

module.exports = {
  async create(request, response) {
    const { originalname: nomeDoArquivo, size: tamanho } = request.file;
    const { nome } = request.body;
    try {
      const url = await uploadFile(request.file);
      const resultado = await Resultados.create({
        nome,
        nomeDoArquivo,
        tamanho,
        url,
      });
      return response.json({ resultado });
    } catch (err) {
      console.log(err);
      return response.status(400).send({ error: "Erro ao criar resultado. " });
    }
  },

  async get(request, response) {
    const { id } = request.body;

    try {
      const res = await Resultados.findById(id);
      return response.send({ res });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro ao requisitar a resultado. " });
    }
  },

  async index(request, response) {
    try {
      const res = await Resultados.find();
      return response.send({ res });
    } catch (err) {
      return response
        .status(400)
        .send({ error: "Erro ao requisitar resultados. " });
    }
  },
};
