function getGender(gender) {
  const results = RICKANDMORTY.results.filter( persona => persona.gender === gender );
  return results;
}

function getSpecies(species) {
  const results = RICKANDMORTY.results.filter( persona => persona.species === species );
  return results;
}

function getStatus(status) {
  const results = RICKANDMORTY.results.filter( persona => persona.status === status );
  return results;
}

// function name() {
//   for (let i=0; i <= RICKANDMORTY.results.length; i++) {
//     RICKANDMORTY.results[i].name;
//     console.log(RICKANDMORTY.results[i].name);
//   }
// }

window.data = {
  getGender,
  getSpecies,
  getStatus
};

