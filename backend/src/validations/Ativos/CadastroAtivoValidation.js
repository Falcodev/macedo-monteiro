const { celebrate, Segments, Joi } = require("celebrate");

module.exports = celebrate({
  [Segments.BODY]: Joi.object().keys({
    // Geral
    apelido: Joi.string(),
    endereco: Joi.string().required(),
    bairro: Joi.string().required(),
    cep: Joi.number(),
    municipio: Joi.string().required(),
    coordenadas: Joi.array().items(Joi.number(), Joi.number()),

    // Status
    disponibilidade: Joi.string().valid(
      "aluguel",
      "venda",
      "aluguel e venda",
      "indisponivel"
    ),
    titular: Joi.string(),
    valor: Joi.number(),

    sku: Joi.string().required(),
    inscricao: Joi.string(),
    dataAquisicao: Joi.date(),
    valorMatricula: Joi.number(),
    area: Joi.string(),

    // Avaliação
    valorIPTU: Joi.number(),
    mercado: Joi.number(),

    // Proprietário
    nomeMatricula: Joi.string(),
    nomeIPTU: Joi.string(),
    escritura: Joi.string(),
    cartorioDeRegistro: Joi.string(),

    observacao: Joi.string(),
  }),
});
