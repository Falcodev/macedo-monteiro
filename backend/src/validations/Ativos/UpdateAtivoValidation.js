const { celebrate, Segments, Joi } = require("celebrate");

module.exports = celebrate({
  [Segments.BODY]: Joi.object().keys({
    // Geral
    id: Joi.string().required(),
    apelido: Joi.string(),
    endereco: Joi.string(),
    bairro: Joi.string(),
    cep: Joi.number(),
    municipio: Joi.string(),
    coordenadas: Joi.array().items(Joi.number(), Joi.number()),

    // Status
    disponibilidade: Joi.string(),
    titular: Joi.string(),
    valor: Joi.number(),

    sku: Joi.string(),
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
