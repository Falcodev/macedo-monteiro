const Grupo = require("../models/Grupo");
const Ativos = require("../models/Ativos");

const addToGroup = require("./addToGroupService");

module.exports = async function generateSKU(body) {
  let sku, grupo;
  // se o grupo existe pego os dados do grupo
  if (body.idGrupo) grupo = await Grupo.findById(body.idGrupo);
  // se tem iptu e nao tem grupo, o sku será o iptu
  if (body.inscricao && !body.idGrupo) sku = body.inscricao;
  // se tem iptu e grupo, o sku será grupo-iptu
  else if (body.inscricao && body.idGrupo) {
    grupo = await addToGroup(grupo, body._id);
    sku = `${grupo.codigo}-${body.inscricao}`;
  }
  // se nao tem iptu e tem grupo, o sku será o codigo do grupo e a ordem do ativo na lista do grupo
  else if (!body.inscricao && body.idGrupo) {
    grupo = await addToGroup(grupo, body._id);
    sku = `${grupo.codigo}-${grupo.ativos.length}`;
  } else sku = body.codigo;
  return sku;
};
