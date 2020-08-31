const min = 1;
const max = 100;
const magicNumber = getRandomInt(min, max);
var guess = 200

function getRandomInt(min, max) { //gets a random interger to start the game
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
compareValues(magicNumber, guess);

console.log(magicNumber);

while (magicNumber != guess) {
    guess = Number(prompt('Tente adivinhar o número!'))

    if (magicNumber === guess) {
        alert(`You win! ${guess} is the right number!`)
        break;
    }
}
}


