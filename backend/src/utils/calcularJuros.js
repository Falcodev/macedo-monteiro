const diasEntreDatas = require("./diasEntreDatas");

module.exports = function calcularJuros(data1, data2, situacao, valor, juros) {
  if (situacao == "pendente") return (juros = 0);
  const diasJuros = diasEntreDatas(String(data1), String(data2));
  return (juros = valor * juros * diasJuros);
};
