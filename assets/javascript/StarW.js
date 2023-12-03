let yourCharacter

let yourOpponent 

let ahsoka = {
  name: "Ahsoka",
  healthPoints: 165,
  attackPower:  15,
  counterAttackPower:125
}

let kyloRen = {
  name: "Kylo-Ren",
  healthPoints: 175,
  attackPower: 150,
  counterAttackPower: 125
  
}

let rey = {
  name: "Rey",
  healthPoints: 160,
  attackPower: 150,
  counterAttackPower: 125
}


let yoda = {
  name: "Yoda",
  healthPoints: 190,
  attackPower: 160,
  counterAttackPower: 150
}


$(".img class").on("click", function() { 
  yourCharacter = ahsoka; 
  //   // Show yourCharacter's name and healthPoints next to image
  $(".section-title").append(yourCharacter["name"]);
  $(".section-title").append(yourCharacter["healthPoints"]);
  $("#enemies-to-attack").append($(".Rey"));
  $("#enemies-to-attack").append($(".Kylo-Ren"));
  $("#enemies-to-attack").append($(".Yoda"));
  $(".section-title").append(yourCharacter["healthPoints"]);
})


$(".Ahsoka").on("click", function() {
  if (ahsoka= yourCharacter) {
    Rey = yourOpponent 
    $("#defender-area").append($(".Rey"));
    $(".your-oppnent").append(yourOpponent["name"])
    $(".your-oppnent").append(yourOpponent[ "healthPoints"]);
  }
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

// place click function on character Class instead of on an individual character

$(".img class").on("click", function() {
   if (yourCharacter=== undefined) {

    if (firstNumber === undefined) {
      // sets value for the 1st number
      firstNumber = $(this).val(); 
      $("#first-number").text(firstNumber);  
    }
//     else { //concatenate firstNumber
//       firstNumber = firstNumber + $(this).val() ;
//       $("#first-number").text(firstNumber);
//     }
//   }
//   else {
//     if (secondNumber === undefined) {
//       secondNumber = $(this).val()
//       $("#second-number").text(secondNumber);
//     } 
//     else {
//       secondNumber = secondNumber + $(this).val() ;
//       $("#second-number").text(secondNumber);
//     }
//   }
// });
<<<<<<< HEAD
=======


>>>>>>> fe687b41e7ad696217e53146cc46610fd094b873
