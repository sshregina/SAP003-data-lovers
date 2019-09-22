function getValue (arr, key, value) {
  return arr.filter( persona => persona[key] === value );
}

function getAllName(data) {
  let allName = []
  for (let elements of data) {
    allName.push(elements.data)
  }
  return (allName.sort());
}


window.data = {
  getValue,
  getAllName
}

