module.exports = function diasEntreDatas(date1, date2) {
  console.log(typeof date1);
  date1 = date1.slice(0, -14);
  date2 = date2.slice(0, -14);

  let newDate1 = Date.parse(date1);
  let newDate2 = Date.parse(date2);

  const difTempo = Math.abs(newDate2 - newDate1);
  const difDias = Math.ceil(difTempo / (1000 * 60 * 60 * 24));
  return difDias;
};
