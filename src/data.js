function getValue (arr, key, value) {
  return arr.filter( persona => persona[key] === value );
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

window.data = {
  getValue,
  getAllName,
  getPerson
};