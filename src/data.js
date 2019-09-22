function getValue (arr, key, value) {
  return arr.filter(persona => persona[key] === value).sort((a,b)=>a.name>b.name? 1:-1);
}

function getPerson (data,search){
  return data.filter(person => person.name.toUpperCase().includes(search))
}

function getAllName(data) {
  let allName = []
  if (name === "A-Z") {
    allName = data.sort((a, b) => a.name > b.name ? 1 : -1);
  } else if (name === "Z-A") {
    allName = data.sort((a, b) => a.name > b.name ? -1 : 1);
  }
  return allName
}


window.data = {
  getValue,
  getAllName,
  getPerson
}

