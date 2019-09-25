require("../src/data.js");

const personagens = [
  {"id": 1, "name": "Rick Sanchez", "status": "Alive", "species": "Human", "type": "", "gender": "Male"}, 
  {"id": 3, "name": "Summer Smith", "status": "Alive", "species": "Human", "type": "", "gender": "Female"}, 
  {"id": 14, "name": "Alien Morty", "status": "unknown", "species": "Alien", "type": "", "gender": "Male"},
  {"id": 32, "name": "Bearded Lady", "status": "Dead", "species": "Alien", "type": "Parasite", "gender": "Female"},
  {"id": 64, "name": "Chris", "status": "Dead", "species": "Alien", "type": "Organic gun", "gender": "unknown"},
  {"id": 75, "name": "Courier Flap", "status": "Alive", "species": "Alien", "type": "", "gender": "unknown"},
  {"id": 87, "name": "Cynthia", "status": "Dead", "species": "Alien", "type": "Zigerion", "gender": "Female"},
  {"id": 97, "name": "Gonorrhea", "status": "Dead", "species": "Disease", "type": "", "gender": "unknown"},
  {"id": 305, "name": "Scary Glenn", "status": "Alive", "species": "Humanoid", "type": "Monster", "gender": "Male"},
  {"id": 408, "name": "Quick Mistery Presenter", "status": "Alive", "species": "Human", "type": "", "gender": "Male"},
  { "id": 420, "name": "Plutonian Host", "status": "Alive", "species": "Alien", "type": "Plutonian", "gender": "Male"}
];

describe("getValue", () => {
  it("is a function", () => {
    expect(typeof window.data.getValue).toBe("function");
  });

  it("returns `getValue`", () => {

    // quando alguma coisa acontecer
    const resultado = window.data.getValue(personagens, "gender", "Female");

    // espero que, alguma coisa
    expect(resultado).toEqual({"itens": [
      {"id": 3, "name": "Summer Smith", "status": "Alive", "species": "Human", "type": "", "gender": "Female"}, 
      {"id": 32, "name": "Bearded Lady", "status": "Dead", "species": "Alien", "type": "Parasite", "gender": "Female"},
      {"id": 87, "name": "Cynthia", "status": "Dead", "species": "Alien", "type": "Zigerion", "gender": "Female"}
    ], "perc": 27.27});
  });
});

describe("getPerson", () => {
  it("is a function", () => {
    expect(typeof window.data.getPerson).toBe("function");
  });

  it("returns `getPerson`", () => {

    // quando alguma coisa acontecer
    const resultado = window.data.getPerson(personagens, "Rick Sanchez");

    // espero que, alguma coisa
    expect(resultado).toEqual([
      {"id": 1, "name": "Rick Sanchez", "status": "Alive", "species": "Human", "type": "", "gender": "Male"}, 
    ]);
  });
});

describe("getAllName", () => {
  it("is a function", () => {
    expect(typeof window.data.getAllName).toBe("function");
  });

  it("returns `getAllName`", () => {

    // quando alguma coisa acontecer
    const resultado = window.data.getAllName(personagens, "A-Z");

    // espero que, alguma coisa
    expect(resultado).toEqual([
      {"id": 14, "name": "Alien Morty", "status": "unknown", "species": "Alien", "type": "", "gender": "Male"},
      {"id": 32, "name": "Bearded Lady", "status": "Dead", "species": "Alien", "type": "Parasite", "gender": "Female"},
      {"id": 64, "name": "Chris", "status": "Dead", "species": "Alien", "type": "Organic gun", "gender": "unknown"},
      {"id": 75, "name": "Courier Flap", "status": "Alive", "species": "Alien", "type": "", "gender": "unknown"},
      {"id": 87, "name": "Cynthia", "status": "Dead", "species": "Alien", "type": "Zigerion", "gender": "Female"},
      {"id": 97, "name": "Gonorrhea", "status": "Dead", "species": "Disease", "type": "", "gender": "unknown"},
      { "id": 420, "name": "Plutonian Host", "status": "Alive", "species": "Alien", "type": "Plutonian", "gender": "Male"},
      {"id": 408, "name": "Quick Mistery Presenter", "status": "Alive", "species": "Human", "type": "", "gender": "Male"},
      {"id": 1, "name": "Rick Sanchez", "status": "Alive", "species": "Human", "type": "", "gender": "Male"}, 
      {"id": 305, "name": "Scary Glenn", "status": "Alive", "species": "Humanoid", "type": "Monster", "gender": "Male"},
      {"id": 3, "name": "Summer Smith", "status": "Alive", "species": "Human", "type": "", "gender": "Female"}, 
    ]);
  });
});

describe("getAllName", () => {
  it("is a function", () => {
    expect(typeof window.data.getAllName).toBe("function");
  });

  it("returns `getAllName`", () => {

    // quando alguma coisa acontecer
    const resultado = window.data.getAllName(personagens, "Z-A");

    // espero que, alguma coisa
    expect(resultado).toEqual([
      {"id": 3, "name": "Summer Smith", "status": "Alive", "species": "Human", "type": "", "gender": "Female"}, 
      {"id": 305, "name": "Scary Glenn", "status": "Alive", "species": "Humanoid", "type": "Monster", "gender": "Male"},
      {"id": 1, "name": "Rick Sanchez", "status": "Alive", "species": "Human", "type": "", "gender": "Male"}, 
      {"id": 408, "name": "Quick Mistery Presenter", "status": "Alive", "species": "Human", "type": "", "gender": "Male"},
      { "id": 420, "name": "Plutonian Host", "status": "Alive", "species": "Alien", "type": "Plutonian", "gender": "Male"},
      {"id": 97, "name": "Gonorrhea", "status": "Dead", "species": "Disease", "type": "", "gender": "unknown"},
      {"id": 87, "name": "Cynthia", "status": "Dead", "species": "Alien", "type": "Zigerion", "gender": "Female"},
      {"id": 75, "name": "Courier Flap", "status": "Alive", "species": "Alien", "type": "", "gender": "unknown"},
      {"id": 64, "name": "Chris", "status": "Dead", "species": "Alien", "type": "Organic gun", "gender": "unknown"},
      {"id": 32, "name": "Bearded Lady", "status": "Dead", "species": "Alien", "type": "Parasite", "gender": "Female"},
      {"id": 14, "name": "Alien Morty", "status": "unknown", "species": "Alien", "type": "", "gender": "Male"}
    ]);
  });
});