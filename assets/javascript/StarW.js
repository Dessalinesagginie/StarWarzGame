let yourCharacter 

let ahsoka = {
  name: "Ahsoka",
  healthPoints: 150,
  attackPower: 150,
  counterAttackPower: 125
}

let kyloRen = {
  name: "KyloRen",
  healthPoints: 150,
  attackPower: 150,
  counterAttackPower: 125
}

let rey = {
  name: "Rey",
  healthPoints: 150,
  attackPower: 150,
  counterAttackPower: 125
}
let yoda = {
  name: "Yoda",
  healthPoints: 175,
  attackPower: 160,
  counterAttackPower: 150
}

$("#Ahsoka").on("click", function() {
  yourCharacter = ahsoka; 
});

$(".Kylo-Ren").on("click", function() {
  yourCharacter = kylo-ren; 
});

$(".Rey").on("click", function() {
  yourCharacter = rey; 
});

$(".Yoda").on("click", function() {
  yourCharacter = yoda; 
});