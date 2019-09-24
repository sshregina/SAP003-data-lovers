function getValue (arr, key, value) {
  const filterArr = arr.filter( persona => persona[key] === value );

  return {
    items: filterArr,
    perc: calcPercentual (arr, filterArr)
  };
}

function getPerson (data, search) {
  return data.filter(person => person.name.toUpperCase().includes(search.toUpperCase()));
}

function getAllName(data, name) {
  if (name === "A-Z") {
    return data.sort((a, b) => a.name > b.name ? 1 : -1);
  }
  return data.sort((a, b) => a.name > b.name ? -1 : 1);
}

function calcPercentual (arr, filterArr) {
  const porcentagem = (filterArr.length *100)/arr.length;
  return Math.round(porcentagem * 100) / 100;
}

window.data = {
  getValue,
  getAllName,
  getPerson,
  calcPercentual
};