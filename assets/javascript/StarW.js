$(document).ready(function() {
  
  let yourCharacter = {

    "Ahsoka": {
      name: "Ahsoka",
      healthPoints: 160,
      attackPower:  9,
      imageUrl: "assets/images/Ahsoka-Tano.jpg",
      counterAttackPower:20
    },
    
    "Kylo-Ren": {
      name: "Kylo-Ren",
      healthPoints: 150,
      attackPower: 10,
      imageUrl: "assets/images/ben-solo-kylo-ren.jpg",
      counterAttackPower:25
    },

    "Rey": {
      name: "Rey",
      healthPoints: 170,
      attackPower: 8,
      imageUrl: "assets/images/Rey.jpg",
      counterAttackPower:30
    },

    "Yoda": {
      name: "Yoda",
      healthPoints: 175,
      attackPower: 12,
      imageUrl: "assets/images/Yoda.jpg",
      counterAttackPower: 30
    }
  };

  let fighter;
 
  let skirmishers = [];
  
  let opponent;

  let battleCounter = 1;
  
  let victimCount = 0;

  
  // FUNCTIONS
  // =========

  // Places character card to the page.
  // The character prepared, the area they are rendered to, and their status is set by the arguments passed in.
  var prepareCharacter = function(yourCharacter, renderArea) {
    /*
      character:
      {
      name: "Luke Skywalker",
      health: 100,
      attack: 14,
      imageUrl: "assets/images/luke-skywalker.jpg",
      enemyAttackBack: 5
      },

      renderArea: "#characters-section"

      charDiv:
       <div class='character' data-name='Luke Skywalker'>
        <div class='character-name'>Luke Skywalker</div>
        <img class= src="assets/images/Luke Skywalker" alt='image'character-image'>
        <div class='character-health'>100</div> 
       </div>
      
      charName: <div class='character-name'>Obi-Wan Kenobi</div>

      charImage: <img class= src="assets/images/obi-wan.jpg" alt='image'character-image'> 

      charHealth: <div class='character-health'>120</div> 
   
    */
    
// This block of code builds the character card, and renders it to the page.
var charDiv = $("<div class='character' data-name='" + character.name + "'>");
    
var charName = $("<div class='character-name'>").text(character.name);

var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);

var charHealth = $("<div class='character-health'>").text(character.health);
charDiv.append(charName).append(charImage).append(charHealth);
$(renderArea).append(charDiv);
};













// $(".Ahsoka").on("click", function() {
//   yourCharacter = ahsoka; 
//   $("#enemies-to-attack").append($(".Rey"));
//   $("#enemies-to-attack").append($(".Kylo-Ren"));
//   $("#enemies-to-attack").append($(".Yoda"));
// });

// $(".Kylo-Ren").on("click", function() {
//   yourCharacter = kyloRen; 
//   $("#enemies-to-attack").append($("#Ahsoka"));
//   $("#enemies-to-attack").append($(".Rey"));
//   $("#enemies-to-attack").append($(".Yoda"));
// });

// $(".Rey").on("click", function() {
//   yourCharacter = rey;
//   $("#enemies-to-attack").append($("#Ahsoka"));
//   $("#enemies-to-attack").append($(".Yoda")); 
//   $("#enemies-to-attack").append($(".Kylo-Ren"));
// });

// $(".Yoda").on("click", function() {
//   yourCharacter = yoda; 
//   $("#enemies-to-attack").append($("#Ahsoka"));
//   $("#enemies-to-attack").append($(".Kylo-Ren")); 
//   $("#enemies-to-attack").append($(".Rey"));
// });

