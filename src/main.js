const tela = document.getElementById("lista");

document.getElementById("btn-gender-fem").addEventListener("click", filterFemale);
document.getElementById("btn-gender-male").addEventListener("click", filterMale);
document.getElementById("btn-status-alive").addEventListener("click", filterAlive);
document.getElementById("btn-status-dead").addEventListener("click", filterDead);

function buildHtml(element) {
  return `
  <div class="card">
    <img src="${element.image}">
    <ul class="card__list">
      <li>Nome: <strong>${element.name}</strong></li>
      <li>Status: <strong>${element.status}</strong></li>
      <li>Espécie: <strong>${element.specie}</strong></li>
      <li>Gênero: <strong>${element.gender}</strong></li>
      <li>Origem: <strong>${element.origin.name}</strong></li>
      <li>Localização: <strong>${element.location.name}</strong></li>
    </ul>
  </div>
  `;
}

function render(results) {
  tela.innerHTML = results.reduce((acc, element) => acc + buildHtml(element), "");
}

function filterFemale() {
  render(window.data.getGender("Female"));
}

function filterMale() {
  render(window.data.getGender("Male"));
}

function filterDead() {
  render(window.data.getStatus("Dead"));
}

function filterAlive() {
  render(window.data.getStatus("Alive"));
}

