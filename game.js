const min = 1;
const max = 100;
function getRandomInt(min, max) { //gets a random interger to start the game
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
const a = getRandomInt(min, max);

console.log(a);



