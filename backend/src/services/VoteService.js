const Pendencias = require("../models/Pendencias");

const servicos = {
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
    let pendencia = await servicos.votar(id, idPessoa, voto, representacao);
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
      res = await servicos.mudarSituacao(id, "reprovado");
    else if (qntVotos != 0) res = await servicos.mudarSituacao(id, "aprovado");
    return res;
  },

  async dois(id, idPessoa, voto, representacao) {
    let pendencia = await servicos.votar(id, idPessoa, voto, representacao);
    let votos = pendencia.votos;

    let votosAprovados = 0;
    let votosReprovados = 0;
    for (let i = 0; i < votos.length; i++) {
      if (votos[i].voto == "aprovado") votosAprovados++;
      else if (votos[i].voto == "reprovado") votosReprovados++;
    }

    let res = pendencia;
    if (votosReprovados >= 3)
      res = await servicos.mudarSituacao(id, "reprovado");
    else if (votosAprovados >= 2)
      res = await servicos.mudarSituacao(id, "aprovado");
    return res;
  },

  async oitenta(id, idPessoa, voto, representacao) {
    let pendencia = await servicos.votar(id, idPessoa, voto, representacao);
    let votos = pendencia.votos;

    let total = 0;
    let i;
    for (i = 0; i < votos.length; i++) {
      if (votos[i].voto == "aprovado") {
        total += votos[i].representacao;
      }
    }

    let res = pendencia;
    if (total >= 80) res = await servicos.mudarSituacao(id, "aprovado");
    else if (i == 4 && total < 80)
      res = await servicos.mudarSituacao(id, "reprovado");
    return res;
  },
};

module.exports = servicos;
