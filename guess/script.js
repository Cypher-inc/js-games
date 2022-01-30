'use strict';

// console.log(document.querySelector('.message').
// textContent);


// document.querySelector('.check').addEventListener
// ('click', function(){
//     console.log(document.querySelector('.guess').value);
// });

var num = Math.trunc(Math.random()*10) + 1;
console.log(num);

var ls = document.querySelector('.score').
textContent
var highscore = 0


var displayMsg = function(msg){   //to avoid repetition 
    document.querySelector('.message').
    textContent = msg
}

var test1 = function(){
    var val = Number(document.querySelector('.guess').value)
    console.log(`Value entered is: ${(val)}`);

    // document.querySelector('.message').
    // textContent = 'Correct Number my dude!'.
    displayMsg('Correct Number my dude!')


    if(val === num){
        document.querySelector('.message').
        textContent = 'Number is correct!'
        document.querySelector('.message').
            style.color = '#FFFFFF'

        document.querySelector('body').
        style.backgroundColor = '#60b347'

        document.querySelector('.number').
        style.fontSize = '10rem'

        document.querySelector('.number').
        style.width = '20rem'

        document.querySelector('.number').
        textContent = num
        
        document.querySelector('.again-txt').
        textContent = 'You WON! Click here to try again ->'
        
        if(ls > highscore){
            highscore = ls
            // console.log(ls);
            // console.log(highscore);
            
            document.querySelector('.highscore').
            textContent = highscore
    
        }
        
        
    }
    else if(val == false){
        document.querySelector('.message').
        textContent = 'No number entered!'
        document.querySelector('.message').
            style.color = '#FFAE42'
       
    }
    
    else if(val !== num){
        // ls = document.querySelector('.score').
        // textContent
      
        ls--

        if(ls > 0){
            document.querySelector('.message').
            textContent = val > num ? 'Too high!' : 'Too low!'
            document.querySelector('.message').
            style.color = '#FF0000'
    
            // console.log(ls);
            document.querySelector('.score').textContent = ls
        }
        else{
            document.querySelector('.message').
            textContent = 'Loss! You lost the Game!'
            document.querySelector('.score').textContent = ls

        }
  
    }

    // else if(val < num){
    //     // ls = document.querySelector('.score').
    //     // textContent
    //     ls--

    //     if(ls > 0){
    //     document.querySelector('.message').
    //     textContent = 'Too low!'
    //     document.querySelector('.message').
    //         style.color = '#FF0000'
        
    //     document.querySelector('.score').textContent = ls
    //     }
    //     else{
    //         document.querySelector('.message').
    //         textContent = 'Loss! You lost the Game!'
    //          document.querySelector('.score').textContent = ls

    //     }
    // }
   
}

var reset = function(){
    // num = Math.trunc(Math.random()*10) + 1;
    num = Math.trunc(Math.random()*10) + 1;
    ls = 20
    document.querySelector('.number').
    textContent = '?'

    document.querySelector('.guess').value = ''
    document.querySelector('.score').textContent = 20

    // document.querySelector('.message').
    // textContent = 'Start guessing...'
    displayMsg('Start guessing...')

    document.querySelector('body').
    style.backgroundColor = '#222'

    document.querySelector('.number').
    style.fontSize = '6rem'

    document.querySelector('.number').
    style.width = '15rem'

    document.querySelector('.message').
    style.color = '#FFFFFF'

    document.querySelector('.again-txt').
    textContent = ''

}