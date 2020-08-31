var magicNumber = 0 //=  55 getRandomInt(min, max);  <- uncomment this for HARD hode.
const body = document.querySelector('body');

function cheatGame(){ // here, I know you want to cheat.
    console.log(`Oh, you little cheater... Ok then, the number is ${magicNumber}! Have fun, I guess`); 
}

function setDificulty(){
    let value = document.querySelector('#gamemode').value;
    if(value === 'easy'){
        magicNumber =  55;
        alert(`your dificulty is ${value}, and magic number is ${magicNumber}`);
    }else if(value === 'hard'){
        magicNumber = getRandomInt(1, 100);
        alert(`your dificulty is ${value}, and magic number is ${magicNumber}`);
    }
    
    
}

function getRandomInt(min, max) { //gets a random interger to start the game
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function game(){
    while (magicNumber != guess) {
        var guess = Number(prompt('Tente adivinhar o número!'))
        var counter= 0
        if (magicNumber == guess) {
            body.style.backgroundColor = 'gainsboro';
            body.style.color = 'red';
            body.style.textAlign = 'center';
            body.style.padding = '10rem'
            body.innerHTML = '<h1>You WIN! Congratulations!<h1>'
            break;
        }
    }
}



