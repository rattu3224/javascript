'use strict';

let secretNumber = Math.trunc(Math.random() * 20)+1;
let score = 20; // state variable
let highScore = document.querySelector('.highscore').textContent;

const displayMsg = (txtMsg)=>{
    document.querySelector('.message').textContent= txtMsg;//'Correct Number';
}
const bodyColor = (color)=>{
    document.querySelector('body').style.backgroundColor = color;//'#60b347';
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess || typeof guess == 'string')
    {
        document.querySelector('.message').textContent= '⛔️ No number';
    }
    else if(guess === secretNumber)
    {
        // highScore ++ ;
        // document.querySelector('body').style.backgroundColor = '#60b347';
        bodyColor('#60b347');
        displayMsg('Correct Number');
        document.querySelector('.number').textContent = secretNumber;
        if(highScore == 0 || highScore < score)
        {
            highScore = score;
        }
    }
    else if(guess > secretNumber)
    {
        score -=1;
        // document.querySelector('body').style.backgroundColor = '#b37d47';
        // document.querySelector('.message').textContent= 'Too large';
        bodyColor('#60b347');
        displayMsg('Too large');
    }
    else if(guess < secretNumber)
    {
        score -=1;
        // document.querySelector('.message').textContent= 'Too Small';
        displayMsg('Too Small');
    }

    if(score === 0)
    {
        // document.querySelector('body').style.backgroundColor = 'red';
        // document.querySelector('.message').textContent = 'you lost the game';
        bodyColor('#FF0000');
        displayMsg('😖 You lost the game');
        return;
    }
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highScore;

});

document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random() * 20)+1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#000';
    document.querySelector('.guess').value = '';
    score = 20;
})