// function getGender(gender) {
//   return RICKANDMORTY.results.filter( persona => persona.gender === gender ); 
// }

// function getSpecies(species) {
//   return RICKANDMORTY.results.filter( persona => persona.species === species ); 
// }

// function getStatus(status) {
//   return RICKANDMORTY.results.filter( persona => persona.status === status );
// }

function getValue (key, value) {
  return RICKANDMORTY.results.filter( persona => persona[key] === value );
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

