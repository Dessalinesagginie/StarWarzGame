$(document).ready(function() {
    let characters = {
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
    
    let attacker;

    let combatants = [];

    let defender;

    


    let renderCharacter = function(character, renderArea) {
       
        let charDiv = $("<div class='character' data-name='" + character.name + "'>");
       
        let charName = $("<div class='character-name'>").text(character.name);

        let charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);

        let charHealth = $("<div class='character-health'>").text(character.healthPoints);
       
        charDiv.append(charName);
        charDiv.append(charHealth);
        charDiv.append(charImage);
        $(renderArea).append(charDiv);
    };

    let initializeGame = function() {
        for (let key in characters) {
            renderCharacter(characters[key], "#characters-section");
        }
    };

    initializeGame();

    let updateCharacter = function(charObj, areaRender) {
        $(areaRender).empty();
        renderCharacter(charObj, areaRender);
    };

    let renderEnemies = function(enemyArr) {
        for (let i = 0; i < enemyArr.length; i++) {
            renderCharacter(enemyArr[i], "#available-to-attack-section");
        }
    };  

    let clearMessage = function() {
        let gameMessage = $("#game-message");

        gameMessage.text("");
    };

    $("#characters-section").on("click", ".character", function() {
        let name = $(this).attr("data-name");
        if (!attacker) {
            attacker = characters[name];
       
            for (let key in characters){
                if (key !== name){
                    
                    combatants.push(characters[key]);
                }
            }

            $("#characters-section").hide();

            updateCharacter(attacker, "#selected-character");
            renderEnemies(combatants);
        }
    });
    
    // Create an on click event for each enemy.
    $("#available-to-attack-section").on("click", ".character", function() {
        let name = $(this).attr("data-name");
        if ($("#defender").children().length === 0) {
            defender = characters[name];
            updateCharacter(defender, "#defender");

            $(this).remove();
            clearMessage();
        }

    });
    // the attack button click

});



