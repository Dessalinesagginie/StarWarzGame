let yourCharacter 

let ahsoka = {
  name: "Ahsoka",
  healthPoints: 150,
  attackPower:  15,
  counterAttackPower:125
}

let kyloRen = {
  name: "Kylo-Ren",
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
  $("#enemies-to-attack").append($(".Rey"));
  $("#enemies-to-attack").append($(".Kylo-Ren"));
  $("#enemies-to-attack").append($(".Yoda"));
});

$(".Kylo-Ren").on("click", function() {
  yourCharacter = kyloRen; 
  $("#enemies-to-attack").append($("#Ahsoka"));
  $("#enemies-to-attack").append($(".Rey"));
  $("#enemies-to-attack").append($(".Yoda"));
});

$(".Rey").on("click", function() {
  yourCharacter = rey;
  $("#enemies-to-attack").append($("#Ahsoka"));
  $("#enemies-to-attack").append($(".Yoda")); 
  $("#enemies-to-attack").append($(".Kylo-Ren"));
});

$(".Yoda").on("click", function() {
  yourCharacter = yoda; 
  $("#enemies-to-attack").append($("#Ahsoka"));
  $("#enemies-to-attack").append($(".Kylo-Ren")); 
  $("#enemies-to-attack").append($(".Rey"));
});

// 1.Click on opponent, 2.move op to defender area
