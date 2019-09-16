const tela = document.getElementById("lista");

document.getElementById("btn-gender-fem").addEventListener("click", filterFemale);
document.getElementById("btn-gender-male").addEventListener("click", filterMale);
document.getElementById("btn-gender-unknown").addEventListener("click", filterGenderUnknown);
document.getElementById("btn-status-alive").addEventListener("click", filterAlive);
document.getElementById("btn-status-dead").addEventListener("click", filterDead);
document.getElementById("btn-status-unknown").addEventListener("click", filterStatusUnknown);

//Estrutura de como os cards dos personagens aparecem na tela
function buildHtml(element) {
  return `
  <div class="card">
    <img src="${element.image}">
    <ul class="card__list">
      <li>Nome: <strong>${element.name}</strong></li>
      <li>Status: <strong>${element.status}</strong></li>
      <li>Espécie: <strong>${element.species}</strong></li>
      <li>Gênero: <strong>${element.gender}</strong></li>
      <li>Origem: <strong>${element.origin.name}</strong></li>
      <li>Localização: <strong>${element.location.name}</strong></li>
    </ul>
  </div>
  `;
}

// Função para printar cards na tela
function render(results) {
  let html = "";
  results.forEach((item) => html += buildHtml(item));
  tela.innerHTML = html;
}

// Funções para filtar dados que vão aparecer no click de cada botão
function filterFemale() {
  render(window.data.getValue("gender", "Female"));
}

function filterMale() {
  render(window.data.getValue("gender", "Male"));
}

function filterGenderUnknown() {
  render(window.data.getValue("gender", "unknown"));
}

function filterDead() {
  render(window.data.getValue("status", "Dead"));
}

function filterAlive() {
  render(window.data.getValue("status", "Alive"));
}

function filterStatusUnknown() {
  render(window.data.getValue("status", "unknown"));
}

