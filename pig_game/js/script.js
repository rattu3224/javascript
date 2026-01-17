'use strict';


const roll_dice = document.querySelector('.btn-roll');
const num_arr = [1,2,3,4,5,6];
let img_src = document.querySelector('.dice');
let score = {'player1':0,'player2':0};
let player = document.querySelectorAll('.player');
let current_player = document.querySelector('#current_user').value;
let dice_score = 0;
const action_roll_dice = ()=>{
    const i = Math.floor(Math.random()*num_arr.length);
    let dice = 'dice-'+num_arr[i]+'.png';
    if(num_arr[i]!=1)
    {
        dice_score += num_arr[i];
    }
    else{
        dice_score = 0;
    }
    let crnt_player = document.querySelector('#current_user').value;
    document.querySelector(`#current-${crnt_player}`).textContent = dice_score;
    document.querySelector('.dice').setAttribute('src','img/'+dice);
}

const switch_player =(player)=>
{
    let remove_active = (player == 1)?0:1;
    let tobe_activePlayer= document.querySelector('.player-'+player+'-panel').classList;
    let cureent_activePlayer = document.querySelector('.player-'+remove_active+'-panel').classList;
    cureent_activePlayer.remove('active');
    tobe_activePlayer.add('active');
    document.querySelector('#current_user').value = player;
    dice_score =0;
}

const hold_score = ()=>{
    let crnt_player = document.querySelector('#current_user').value;
    
    // console.log
    let crnt_score = 0;
    if(crnt_player == 1)
    {
        let plyr_score =  score.player2;
        crnt_score = parseInt(plyr_score) + dice_score;
        score.player2 = crnt_score;
    }
    else{
        let plyr_score =  score.player1;
        crnt_score = parseInt(plyr_score) +dice_score;
        score.player1 = crnt_score;
    }
    console.log({score})
    console.log({crnt_score})
    document.querySelector(`#score-${crnt_player}`).textContent = crnt_score;

        
}
/******
 * 
 * reset game
 * 
 * 
*/
const resetgame = () =>{
    
    if(score.player1 >= 100)
    {
        document.querySelector(`.player-0-panel`).addClass('winner')
    }
    if(score.player2 >= 100)
    {
        document.querySelector(`player-1-panel`).addClass('winner')
    }
    document.querySelectorAll('.player-current-score').textContent = 0;
    document.querySelectorAll('.player-score').textContent = 0;
}

roll_dice.addEventListener('click',action_roll_dice);
document.querySelector('.btn-hold').addEventListener('click',hold_score)
player.forEach(play => {
    play.addEventListener('click',function(){
        let player_class = play.classList;
        let number = player_class[1].match(/\d+/)[0];
        switch_player(number)
    })
    
});
document.querySelector('.btn-new').addEventListener('click',resetgame)

