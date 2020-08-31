const body = document.querySelector('body');

function cheatGame(){ // here, I know you want to cheat.
    console.log(`Oh, you little cheater... Ok then, the number is ${magicNumber}! Have fun, I guess`); 
}

    var magicNumber = function(){
    let value = document.querySelector('#gamemode').value;
    if(value === 'easy'){
        return getRandomInt(1, 10);
       // alert(`your dificulty is ${value}. Try guessing my number, between 1 and 10!`);
    }else if(value === 'medium'){
        return getRandomInt(1, 50);
       // alert(`your dificulty is ${value}. Try guessing my number, between 1 and 50!`);
    }else if(value == 'hard'){
        return getRandomInt(1, 100);
       // alert(`your dificulty is ${value}. Try guessing my number, between 1 and 100!`);

    }
 
    
}

function getRandomInt(min, max) { //gets a random interger to start the game
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function game(){
    while (true) {
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



