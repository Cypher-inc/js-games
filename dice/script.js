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
            document.querySelector('.dice').src = "images/dice-1.png";
            break;
        case 2:
            document.querySelector('.dice').src = "images/dice-2.png";
            break;
        case 3:
            document.querySelector('.dice').src = "images/dice-3.png";
            break;
        case 4:
            document.querySelector('.dice').src = "images/dice-4.png";
            break;
        case 5:
            document.querySelector('.dice').src = "images/dice-5.png";
            break;
        case 6:
            document.querySelector('.dice').src = "images/dice-6.png";
            break;
    }
}

var add_Num
roll.addEventListener('click',function(){
        if(p1_act.classList.contains('player--winner') || p2_act.classList.contains('player--winner')){
            score0El.textContent = val1
            score1.textContent = 0
        }
        else if(p1_act.classList.contains('player--active')){
  
        add_Num = Number(Math.trunc(Math.random()*6) + 1);

 
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


    var val1 = 0, val2 = 0, l1 = 0, r1 = 0;
    var p1_name;
    var p2_name;
    var scEl = document.querySelector('.btn--sc');
    scEl.textContent = `${l1} : ${r1}` 

hold.addEventListener('click',function(){
     val1 = +val1 + +score1.textContent
     val2 = +val2 + +score2.textContent


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
            scEl.textContent = `${++l1} : ${r1}` 

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
            scEl.textContent = `${l1}   :   ${++r1}` 

         }
    }

});

var newEl = document.querySelector('.btn--new');
newEl.addEventListener('click',function(){
    
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

