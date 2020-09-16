const { celebrate, Segments, Joi } = require("celebrate");

module.exports = celebrate({
  [Segments.BODY]: Joi.object().keys({
    nome: Joi.string().required(),
    email: Joi.string().required().email(),
    senha: Joi.string().required(),
    representacao: Joi.number().required(),
    cotas: Joi.number().required(),
  }),
});
