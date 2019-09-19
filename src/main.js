const data = RICKANDMORTY.results;
const tela = document.getElementById("lista");

document.getElementById("btn-gender-fem").addEventListener("click", filterFemale);
document.getElementById("btn-gender-male").addEventListener("click", filterMale);
document.getElementById("btn-gender-unknown").addEventListener("click", filterGenderUnknown);
document.getElementById("btn-status-alive").addEventListener("click", filterAlive);
document.getElementById("btn-status-dead").addEventListener("click", filterDead);
document.getElementById("btn-status-unknown").addEventListener("click", filterStatusUnknown);
document.getElementById("btn-specie-Human").addEventListener("click", filterSpecieHuman);
document.getElementById("btn-specie-Alien").addEventListener("click", filterSpecieAlien);

// Função para printar cards na tela
function buildHtml(itens) {
  let html = "";
  itens.forEach((item) => html += `
  <div class="card">
    <img src="${item.image}">
    <ul class="card__list">
      <li>Nome: <strong>${item.name}</strong></li>
      <li>Status: <strong>${item.status}</strong></li>
      <li>Espécie: <strong>${item.species}</strong></li>
      <li>Gênero: <strong>${item.gender}</strong></li>
      <li>Origem: <strong>${item.origin.name}</strong></li>
      <li>Localização: <strong>${item.location.name}</strong></li>
    </ul>
  </div>
  `);
  tela.innerHTML = html;
}

// Funções para filtar dados que vão aparecer no click de cada botão
function filterFemale() {
  buildHtml(window.data.getValue(data, "gender", "Female"));
}

function filterMale() {
  buildHtml(window.data.getValue(data, "gender", "Male"));
}

function filterGenderUnknown() {
  buildHtml(window.data.getValue(data, "gender", "unknown"));
}

function filterDead() {
  buildHtml(window.data.getValue(data, "status", "Dead"));
}

function filterAlive() {
  buildHtml(window.data.getValue(data, "status", "Alive"));
}

function filterStatusUnknown() {
  buildHtml(window.data.getValue(data, "status", "unknown"));
}

function filterSpecieHuman() {
  buildHtml(window.data.getValue(data, "species", "Human"));
}

function filterSpecieAlien() {
  buildHtml(window.data.getValue(data, "species", "Alien"));
}