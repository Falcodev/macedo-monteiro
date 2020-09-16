const Pendencias = require("../models/Pendencias");
const Usuario = require("../models/Usuario");

const situacoes = {
  async votar(id, idPessoa, voto, representacao) {
    try {
      const res = await Pendencias.findByIdAndUpdate(
        id,
        { $push: { votos: { idPessoa, voto, representacao } } },
        { new: true }
      );
      return res;
    } catch (err) {
      return { error: "Ocorreu um erro ao votar. " };
    }
  },

  async mudarSituacao(id, situacao) {
    try {
      const res = await Pendencias.findByIdAndUpdate(
        id,
        { situacao },
        { new: true }
      );
      return res;
    } catch (err) {
      return { error: "Ocorreu um erro ao votar. " };
    }
  },

  async um(id, idPessoa, voto, representacao) {
    let pendencia = await situacoes.votar(id, idPessoa, voto, representacao);
    let votos = pendencia.votos;

    let qntVotos = 0;
    for (let i = 0; i < votos.length; i++) {
      if (votos[i].voto == "aprovado") {
        qntVotos++;
        break;
      }
    }

    let res = pendencia;
    if (qntVotos == 0 && votos.length == 4)
      res = await situacoes.mudarSituacao(id, "reprovado");
    else if (qntVotos != 0) res = await situacoes.mudarSituacao(id, "aprovado");
    return res;
  },

  async dois(id, idPessoa, voto, representacao) {
    let pendencia = await situacoes.votar(id, idPessoa, voto, representacao);
    let votos = pendencia.votos;

    let votosAprovados = 0;
    let votosReprovados = 0;
    for (let i = 0; i < votos.length; i++) {
      if (votos[i].voto == "aprovado") votosAprovados++;
      else if (votos[i].voto == "reprovado") votosReprovados++;
    }

    let res = pendencia;
    if (votosReprovados >= 3)
      res = await situacoes.mudarSituacao(id, "reprovado");
    else if (votosAprovados >= 2)
      res = await situacoes.mudarSituacao(id, "aprovado");
    return res;
  },

  async oitenta(id, idPessoa, voto, representacao) {
    let pendencia = await situacoes.votar(id, idPessoa, voto, representacao);
    let votos = pendencia.votos;

    let total = 0;
    let i;
    for (i = 0; i < votos.length; i++) {
      if (votos[i].voto == "aprovado") {
        total += votos[i].representacao;
      }
    }

    let res = pendencia;
    if (total >= 80) res = await situacoes.mudarSituacao(id, "aprovado");
    else if (i == 4 && total < 80)
      res = await situacoes.mudarSituacao(id, "reprovado");
    return res;
  },
};

module.exports = {
  async vote(request, response) {
    const { pendencia, idPessoa, voto } = request.body;

    let representacao = await Usuario.findById(idPessoa);
    representacao = representacao.representacao;

    if (pendencia.situacao !== "pendente")
      return response.status(400).send({ error: "Erro. Pendência fechada. " });

    const votos = pendencia.votos;
    const existe = votos.find((v) => v.idPessoa == idPessoa);
    if (existe) {
      if (existe.voto == voto)
        return response
          .status(400)
          .send({ error: "Erro. Voto igual ao anterior. " });
      else {
        const res = await Pendencias.findById(pendencia.id);
        return response.send({ res });
      }
    }

    const funcao = situacoes[pendencia.opcao];
    try {
      res = await funcao(pendencia._id, idPessoa, voto, representacao);
      return response.send({ res });
    } catch (err) {
      return response.status(400).send({ error: "Erro ao votar. " });
    }
  },
};
