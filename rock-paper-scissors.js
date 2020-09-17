var player = prompt("Hi, what's your name?");
var playerName = document.querySelector('#player');
playerName.textContent = player;
const messageBox = document.querySelector('#messageBox');
const centerPage = document.querySelector('#centerPage');
var i = 0;
var speed = 50; 
function updateMessageBox() {
    if (i < z.length) {
    messageBox.textContent += z.charAt(i);
    i++;
    setTimeout(updateMessageBox, speed);
  }
}
let z = 'Hi ' + player + ' would you like to play a game with me?';
updateMessageBox();
const reply = document.createElement('input');
const btn = document.createElement('button');
reply.setAttribute('id', 'input1');
reply.setAttribute('type', 'text');
btn.textContent = 'Click Me';
btn.style.padding = '5px';
btn.style.fontSize = '35px';
btn.style.backgroundColor = 'grey';
reply.style.fontSize = '35px';
reply.style.maxWidth = '200px';
btn.onclick = () => {   
    let z = undefined;
    if (reply.value.toLowerCase() == "yes" || reply.value.toLowerCase() == "yep" || 
    reply.value.toLowerCase() == "yeah" || reply.value.toLowerCase() == "ok" || 
    reply.value.toLowerCase() == "sure" || reply.value.toLowerCase() == "absolutely" || 
    reply.value.toLowerCase() == "okey dokie") {
        alert("Yay! Lets's play!");
    }else alert("Tough! My screen. My rules! Let's play");
};
centerPage.appendChild(reply);
centerPage.appendChild(btn);
const like = document.createElement('p');
//like.textContent = 'I like Rock, Paper, Scissors, Lizard, Spock!';
messageBox.appendChild(like);
//z = "I like rock paper scissors lizard Spock, let's play that";
//updateMessageBox();

//z = "First one to 5 wins!";
//updateMessageBox();
const gameOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock']; 
function computerPlay() {
      return gameOptions [(Math.random() * gameOptions.length) | 0]
}
const spock = document.querySelector('#spock');
spock.addEventListener('click', () => {
    let y = "spock";
    game(y);
});
const lizard = document.querySelector('#lizard');
lizard.addEventListener('click', () => {
    let y = "lizard";
    game(y);
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', ()  => {
    let y = "scissors";
    game(y);
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let y = "paper";
    game(y);
});
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let y = "rock";
    game(y);
});

function reset() {
    var myScore = document.querySelector('#computerScore');
    myScore.textContent = 0;
    var yourScore = document.querySelector('#playerScore');
    yourScore.textContent = 0;
    playerScore = 0;
    computerScore = 0;
}
var playerScore = 0;
var computerScore = 0;
function win() {
        playerScore += 1;
        var yourScore = document.querySelector('#playerScore');
        yourScore.textContent = playerScore;
        
}
function lose() {
        computerScore += 1;
        var myScore = document.querySelector('#computerScore');
         myScore.textContent = computerScore;
}
function checkScore() {
    if (playerScore === 5) {
        alert ("Congratulations You're a winner " + player + "!! Let's play again!");
        reset(playerScore && computerScore);
    } else if (computerScore === 5) {
        alert ("You LOSE " +player+ "! Let's play again");
        reset(playerScore && computerScore);
    } else alert ("Pick again");
}
function game(y) {
    computerPlay();
    alert ("Rock Paper Scissors Lizard Spock!");
    let x = computerPlay();
    
    if (y == "rock" && x == "scissors"){ 
        alert("Rock SMASHES scissors! You WIN!");
        win();
    } else if (y == "rock" && x == "paper"){
        alert (" Aww Paper covers Rock. Too bad. You lose");
        lose();
    } else if ( y == "rock" && x == "lizard"){
        alert ("Rock crushes Lizard! You Win!");
        win();
    } else if (y == "rock" && x == "spock"){
        alert ("Spock vapourizes rock! You Lose!");
        lose();
    } else if (y == "paper" && x == "lizard"){
        alert ("Lizard eats Paper. You Lose!");
        lose();
    } else if (y == "paper" && x == "spock"){
        alert ("Paper disproves Spock. You Win!");
        win();
    } else if (y == "paper" && x == "rock"){
        alert ("Paper COVERS Rock! You WIN!");
        win();
    } else if (y == "paper" && x == "scissors"){
        alert ("Scissors CUT paper! You lose. Unlucky");
        lose();
    } else if (y == "scissors" && x == "paper"){
        alert ("Scissors CUT paper! You WIN!");
        win();
    } else if (y == "scissors" && x == "rock"){
        alert ("Rock SMASHES Scissors! You Lose....again");
        lose();
    } else if (y == "scissors" && x == "lizard"){
        alert ("Scissors decapitates Lizard...poor little guy. You Win!");
        win();
    } else if (y == "scissors" && x == "spock"){
        alert ("Spock SMASHES scissors! You Lose!");
        lose();
    } else if (y == "lizard" && x == "rock"){
        alert ("Rock crushes Lizard. You Lose!");
        lose();
    } else if (y == "lizard" && x == "paper"){
        alert ("Lizard eats paper. You Win!");
        win();
    } else if (y == "lizard" && x == "scissors"){
        alert ("Scissors decapitates Lizard. You Lose!");
        lose();
    } else if (y == "lizard" && x == "spock"){
        alert ("lizard poisons Spock. You Win!");
        win();
    } else if (y == "spock" && x == "rock"){
        alert ("Spock vapourises Rock. You Win!");
        win();
    } else if ( y == "spock" && x == "paper"){
        alert ("Paper disproves Spock. You Lose");
        lose();
    }  else if (y == "spock" && x == "scissors"){
        alert ("Spock smashes Scissors! You Win!");
        win();
    } else if (y == "spock" && x == "lizard"){
        alert ("Lizard poisons Spock. You Lose!");
        lose();
    } else if (y === x){
        alert ("Draw!")
    } else {
        alert ("Hmmmm something has gone terribly wrong....what did you do?")
    }
    checkScore();    
}
