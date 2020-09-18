const Grupo = require("../models/Grupo");

module.exports = async function addToGroup(grupo, idAtivo) {
  try {
    grupo.ativos.push({
      idAtivo: idAtivo,
      codigoAtivo: grupo.ativos.length + 1,
    });
    const newGrupo = await Grupo.findByIdAndUpdate(grupo._id, grupo, {
      new: true,
    });
    return newGrupo;
  } catch (err) {
    return err;
  }
};
