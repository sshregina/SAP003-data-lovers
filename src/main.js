const data = RICKANDMORTY.results;

const perc = document.getElementById("perc");
const tela = document.getElementById("list");
const input = document.getElementById("input-persons");
const selectGender = document.getElementById("select-gender");
const selectSpecies = document.getElementById("select-species");
const selectStatus = document.getElementById("select-status");

input.addEventListener("keyup", searchPersons);
document.getElementById("btn-order-az").addEventListener("click", allNameAtoZ);
document.getElementById("btn-order-za").addEventListener("click", allNameZtoA);

function buildHtmlPerc(obj) {
  let html = "";
  obj.itens.forEach((item) => html += `
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img src="${item.image}">
        <p>Nome: <strong>${item.name}</strong></p>
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
  </div>
  `);
  perc.innerHTML = `${obj.perc}% dos personagens possuem essas características.`;
  tela.innerHTML = html ;
}

selectGender.addEventListener("change", () =>{
  buildHtmlPerc(window.db.getValue(data, "gender", selectGender.value));
  perc.classList.remove("invisible");
});

selectSpecies.addEventListener("change", () =>{
  buildHtmlPerc(window.db.getValue(data, "species", selectSpecies.value));
  perc.classList.remove("invisible");
});

selectStatus.addEventListener("change", (e) => {
  buildHtmlPerc(window.db.getValue(data, "status", selectStatus.value));
  perc.classList.remove("invisible");
});

function getValueFromSelect(HTMLSelect) {
  return HTMLSelect.selectedOptions[0].value;
}

function searchPersons() {
  let search = input.value.toUpperCase();
  let name = {"itens": window.db.getPerson(data, search)};
  perc.classList.add("invisible");
  return buildHtmlPerc(name);
}

function allNameAtoZ() {
  perc.classList.add("invisible");
  buildHtmlPerc({"itens": window.db.getAllName(data, "A-Z")});
}

function allNameZtoA() {
  perc.classList.add("invisible");
  buildHtmlPerc({"itens": window.db.getAllName(data, "Z-A")});
}