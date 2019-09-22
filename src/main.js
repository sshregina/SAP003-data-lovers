const data = RICKANDMORTY.results;
const tela = document.getElementById("lista");
const input = document.getElementById("input-person")

input.addEventListener("keyup",searchPersons)

document.getElementById("btn-gender-fem").addEventListener("click", filterFemale);
document.getElementById("btn-gender-male").addEventListener("click", filterMale);
document.getElementById("btn-gender-unknown").addEventListener("click", filterGenderUnknown);
document.getElementById("btn-status-alive").addEventListener("click", filterAlive);
document.getElementById("btn-status-dead").addEventListener("click", filterDead);
document.getElementById("btn-status-unknown").addEventListener("click", filterStatusUnknown);
document.getElementById("btn-specie-Human").addEventListener("click", filterSpecieHuman);
document.getElementById("btn-specie-Alien").addEventListener("click", filterSpecieAlien);
document.getElementById("btn- A-Z").addEventListener("click", filterNamesAZ)

function buildHtml(itens) {
  let html = "";
  itens.forEach((item) => html += `
  <div class="card">
    <div class= "card-inner">
      <div class= "card-front">
      <img src="${item.image}">
      <h3>Nome: ${item.image}</h3>
    </div>
      <div class="card-back">
        <ul class="card__list">
         <li>Nome: <strong>${item.name}</strong></li>
         <li>Status: <strong>${item.status}</strong></li>
         <li>Espécie: <strong>${item.species}</strong></li>
         <li>Gênero: <strong>${item.gender}</strong></li>
         <li>Origem: <strong>${item.origin.name}</strong></li>
         <li>Localização: <strong>${item.location.name}</strong></li>
         </ul>
       </div>
      </div>
    </div>g
  `);
  tela.innerHTML = html;
}

function searchPersons (){
  let search = input.valeu.toUpperCase();
  let name = window.data.getPerson(data,search)
  return buildHtml (name)
}

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

function allNameAtoZ() {
  buildHtml(window.data.getAllName(data, "A-Z"));
}

function allNameZtoA() {
  buildHtml(window.data.getAllName(data, "Z-A"));
}