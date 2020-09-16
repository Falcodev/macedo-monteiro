const { celebrate, Segments, Joi } = require("celebrate");

module.exports = celebrate({
  [Segments.BODY]: Joi.object().keys({
    valor: Joi.number().required(),
    pagador: Joi.string().required(),
    dataVencimento: Joi.date().required(),
    dataRecebimento: Joi.date(),
    juros: Joi.number().required(),
    emissao: Joi.date().required(),
    cpf_cnpj: Joi.number().required(),
    condominio: Joi.number(),
    energia: Joi.number(),
    outros: Joi.number(),
    unidade: Joi.string(),
  }),
});
