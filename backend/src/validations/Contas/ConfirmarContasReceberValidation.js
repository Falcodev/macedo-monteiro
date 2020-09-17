const { celebrate, Segments, Joi } = require("celebrate");

module.exports = celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
    valor: Joi.number().required(),
    dataVencimento: Joi.date().required(),
    dataRecebimento: Joi.date().required(),
    juros: Joi.number().required(),
    desconto: Joi.number().required(),
    multa: Joi.number().required(),
    situacao: Joi.string().valid("pendente", "em atraso").required(),
  }),
});
