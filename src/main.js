document.getElementById("btn-gender-fem").addEventListener( "click", filterFemale );
document.getElementById("btn-gender-male").addEventListener( "click", filterMale );
document.getElementById("btn-status-alive").addEventListener( "click", filterAlive );
document.getElementById("btn-status-dead").addEventListener( "click", filterDead );

function filterFemale() {
  const feme = getGender("Female");
  const tela = document.getElementById("lista");
  tela.innerHTML = "";
  feme.forEach(element => { tela.innerHTML += element.name + "<br />" ;
  });
}

function filterMale() {
  const male = getGender("Male");
  const tela = document.getElementById("lista");
  tela.innerHTML = "";  
  male.forEach(element => { tela.innerHTML += element.name + "<br />" ;
  });
}

function filterDead() {
  const dead = getStatus("Dead");
  const tela = document.getElementById("lista");
  tela.innerHTML = "";  
  dead.forEach(element => { tela.innerHTML += element.name + "<br />" ;
  });
}

function filterAlive() {
  const alive = getStatus("Alive");
  const tela = document.getElementById("lista");
  tela.innerHTML = "";  
  alive.forEach(element => { tela.innerHTML += element.name + "<br />" ;
  });
}

