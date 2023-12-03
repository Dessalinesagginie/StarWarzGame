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

var fighter;
  
var opposition = []; 

$("#Ahsoka").on("click", function() {
  yourCharacter = ahsoka; 
  $("#Defender-area").append($(".Rey"));
  $("#Defender-area").append($(".Kylo-Ren"));
  $("#Defender-area").append($(".Yoda"));
});

$(".Kylo-Ren").on("click", function() {
  yourCharacter = kyloRen; 
  $("#Defender-area").append($("#Ahsoka"));
  $("#Defender-area").append($(".Rey"));
  $("#Defender-area").append($(".Yoda"));
});

$(".Rey").on("click", function() {
  yourCharacter = rey;
  $("#Defender-area").append($("#Ahsoka"));
  $("#Defender-area").append($(".Yoda")); 
  $("#Defender-area").append($(".Kylo-Ren"));
});

$(".Yoda").on("click", function() {
  yourCharacter = yoda; 
  $("#Defender-area").append($("#Ahsoka"));
  $("#Defender-area").append($(".Kylo-Ren")); 
  $("#Defender-area").append($(".Rey"));
});

