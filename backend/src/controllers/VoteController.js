const Pendencias = require("../models/Pendencias");
const Usuario = require("../models/Usuario");

const VoteService = require("../services/VoteService");

module.exports = {
  async vote(request, response) {
    const { pendencia, idPessoa, voto } = request.body;

    let usuario = await Usuario.findById(idPessoa);

    if (!usuario.podeVotar)
      return response
        .status(400)
        .send({ error: "Usuário não possui permição para votar " });

    representacao = usuario.representacao;

    if (pendencia.situacao !== "pendente")
      return response.status(400).send({ error: "Erro. Pendência fechada. " });

    const votos = pendencia.votos;
    const existe = votos.find((v) => v.idPessoa == idPessoa);
    if (existe) {
      return response.status(400).send({ error: "Erro. Usuário já votou. " });
    }

    const funcao = VoteService[pendencia.opcao];
    try {
      res = await funcao(pendencia._id, idPessoa, voto, representacao);
      return response.send({ res });
    } catch (err) {
      console.log(err);
      return response.status(400).send({ error: "Erro ao votar. " });
    }
  },
};
