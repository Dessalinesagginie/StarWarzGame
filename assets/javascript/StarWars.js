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

    let renderCharacter = function(character, renderArea) {
       
        let charDiv = $("<div class='character' data-name='" + character.name + "'>");
       
        let charName = $("<div class='character-name'>").text(character.name);

        let charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);

        let charHealth = $("<div class='character-health'>").text(character.healthPoints);
       
        charDiv.append(charName);
        charDiv.append(charHealth);
        charDiv.append(charImage);
        $(renderArea).append(charDiv);
        console.log(character);
    };

    let initializeGame = function() {
        for (let key in characters) {
            renderCharacter(characters[key], "#characters-section");
        }
    };

    initializeGame();

});

// "#characters-section" click function &(data-name)
