// 'use strict';

// // Selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// let scores, currentScore, activePlayer, playing;

// // Starting conditions
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };
// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;

//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3. Check for rolled 1
//     if (dice !== 1) {
//       // Add dice to current score
//       currentScore += dice;
//       document.getElementById(
//         `current--${activePlayer}`
//       ).textContent = currentScore;
//     } else {
//       // Switch to next player
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // 1. Add current score to active player's score
//     scores[activePlayer] += currentScore;
//     // scores[1] = scores[1] + currentScore

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     // 2. Check if player's score is >= 100
//     if (scores[activePlayer] >= 10) {
//       // Finish the game
//       playing = false;
//       diceEl.classList.add('hidden');

//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       // Switch to the next player
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);


'use strict';

var score0El = document.querySelector('#score--0');
var score1El = document.getElementById('score--1');
var diceEl = document.querySelector('.dice');
var roll = document.querySelector('.btn--roll');
var score1 = document.getElementById('current--0');
var score2 = document.getElementById('current--1');
var hold = document.querySelector('.btn--hold');
var p1_act = document.querySelector('.player--0');
var p2_act = document.querySelector('.player--1');

score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden');

var checkNum = function(add_Num){
    diceEl.classList.remove('hidden');
    switch(add_Num){
        case 1:
            document.querySelector('.dice').src = "dice-1.png";
            break;
        case 2:
            document.querySelector('.dice').src = "dice-2.png";
            break;
        case 3:
            document.querySelector('.dice').src = "dice-3.png";
            break;
        case 4:
            document.querySelector('.dice').src = "dice-4.png";
            break;
        case 5:
            document.querySelector('.dice').src = "dice-5.png";
            break;
        case 6:
            document.querySelector('.dice').src = "dice-6.png";
            break;
    }
}

var add_Num, check1
//check number
// var check_Num = function(add_Num){
//     if(check1 === add_Num){
//         var add_Num1 = Number(Math.trunc(Math.random()*3) + 1);
//         return add_Num1;
//     }
//     else{
//         return add_Num
//     }
// }

roll.addEventListener('click',function(){
        if(p1_act.classList.contains('player--winner') || p2_act.classList.contains('player--winner')){
            score0El.textContent = val1
            score1.textContent = 0
        }
        else if(p1_act.classList.contains('player--active')){
  
        add_Num = Number(Math.trunc(Math.random()*6) + 1);

            // var add_Num1 = check_Num(add_Num)
            // score1.textContent = add_Num
            score1.textContent = Number(score1.textContent) + Number(add_Num)
            // console.log(typeof(score1.textContent));

            if(add_Num === 1){
                score1.textContent = 0
                p1_act.classList.remove('player--active')
                p2_act.classList.add('player--active')
            }
            console.log((add_Num));

            // check1 = add_Num
            checkNum(add_Num);
            }
        else{
            console.log((add_Num));
            add_Num = Number(Math.trunc(Math.random()*6) + 1);
        // score1.textContent = add_Num
           score2.textContent = Number(score2.textContent) + Number(add_Num)
            // console.log(typeof(score1.textContent));
            if(add_Num === 1){
                score2.textContent = 0
                p2_act.classList.remove('player--active')
                p1_act.classList.add('player--active')
            }
            checkNum(add_Num);

        }
    });




    var val1 = 0, val2 = 0;
    var p1_name;
    var p2_name;
hold.addEventListener('click',function(){
     val1 = +val1 + +score1.textContent
     val2 = +val2 + +score2.textContent

    // console.log(val);
    // diceEl.classList.add('hidden');
    if(p1_act.classList.contains('player--active')){
        score0El.textContent = val1
        score1.textContent = 0
        p1_act.classList.remove('player--active')
        p2_act.classList.add('player--active')

        if(val1 >= 10){
           p1_name = document.querySelector('#name--0');
           p1_name.textContent = 'Player 1'
           p2_act.classList.remove('player--active')
           p1_act.classList.add('player--winner')
        }
    }
    else{
        score1El.textContent = val2
        score2.textContent = 0
        p2_act.classList.remove('player--active')
        p1_act.classList.add('player--active')

        if(val2 >= 10){
            p2_name = document.querySelector('#name--1');
            p2_name.textContent = 'Player 2'
            p1_act.classList.remove('player--active')
            p2_act.classList.add('player--winner')
         }
    }

});

var newEl = document.querySelector('.btn--new');

newEl.addEventListener('click',function(){

    if(p1_act.classList.contains('player--winner') && p2_act.classList.contains('player--winner')){
        p1_name.textContent = 'Player 1'
        p2_name.textContent = 'Player 2'
    }
    else if(p1_act.classList.contains('player--winner')){
        p1_name.textContent = 'Player 1'
    }
    else if(p2_act.classList.contains('player--winner')){
        p2_name.textContent = 'Player 2'
    }
    

        p1_act.classList.add('player--active')
        p2_act.classList.remove('player--active')
        p1_act.classList.remove('player--winner')
        p2_act.classList.remove('player--winner')

        

    score1.textContent = 0
    score2.textContent = 0
    score0El.textContent = 0
    score1El.textContent = 0
    val1 = 0
    val2 = 0
    diceEl.classList.add('hidden');

});