// function getGender(gender) {
//   return RICKANDMORTY.results.filter( persona => persona.gender === gender ); 
// }

// function getSpecies(species) {
//   return RICKANDMORTY.results.filter( persona => persona.species === species ); 
// }

// function getStatus(status) {
//   return RICKANDMORTY.results.filter( persona => persona.status === status );
// }

// function getValue (arr, string) {
//   return arr.filter( persona => persona.result.include(string));
// }

function getValue (arr, key, value) {
  return arr.filter( persona => persona[key] === value );
}

// function name() {
//   for (let i=0; i <= RICKANDMORTY.results.length; i++) {
//     RICKANDMORTY.results[i].name;
//     console.log(RICKANDMORTY.results[i].name);
//   }
// }

window.data = {
  getValue
};

