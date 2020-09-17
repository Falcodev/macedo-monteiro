const { celebrate, Segments, Joi } = require("celebrate");

module.exports = celebrate({
  [Segments.BODY]: Joi.object().keys({
    valor: Joi.number().required(),
    chaveDePagamento: Joi.string().required(),
    pagador: Joi.string().required(),
    dataVencimento: Joi.date().required(),
    emissao: Joi.date().required(),
    cpf_cnpj: Joi.number().required(),
  }),
});
