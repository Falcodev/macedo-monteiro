const { celebrate, Segments, Joi } = require("celebrate");

module.exports = celebrate({
  [Segments.BODY]: Joi.object().keys({
    solicitante: Joi.string().required(),
    assunto: Joi.string().required(),
    opcao: Joi.string().valid("um", "dois", "oitenta").required(),
    chat: Joi.object({
      mensagem: Joi.string().required(),
      autor: Joi.string().required(),
      data: Joi.date(),
    }),
  }),
});
