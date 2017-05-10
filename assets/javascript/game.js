
// Defining the variables 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft= 9;
var theirGuess = [];

// Deciding the min and max amount of letters to choose from
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


var randomNumber = getRandomInt(0, 25);
var computerGuessLetter = computerChoices[randomNumber];

console.log(computerGuessLetter);


//When user prssses a key, it will run the following functions
document.onkeyup = function(event) {
	theirGuess.push(event.key);
	
	console.log(theirGuess);

	// Determine which key was pressed
	var userGuess = event.key;


if (userGuess === computerGuessLetter) {
	//wi.textContent = wins++;
	wins++;
	document.getElementById("wi").innerHTML = wins;
	guessesLeft = 9;
	document.getElementById("gl").innerHTML = guessesLeft;
	theirGuess = [];
	document.getElementById("yg").innerHTML = theirGuess;
	randomNumber = getRandomInt(0, 25);
	computerGuessLetter = computerChoices[randomNumber];

	console.log(computerGuessLetter);
}

	
else if ((guessesLeft == 1) && (userGuess !== computerGuessLetter)) {
	
	randomNumber = getRandomInt(0, 25);
	computerGuessLetter = computerChoices[randomNumber];
	losses++;
	document.getElementById("lo").innerHTML = losses;
	guessesLeft = 9;
	document.getElementById("gl").innerHTML = guessesLeft;
	theirGuess = [];
	document.getElementById("yg").innerHTML = theirGuess;
	console.log(computerGuessLetter);
}

else { 
	guessesLeft--;
	 document.getElementById("gl").innerHTML = guessesLeft;
	 yg.textContent = theirGuess;
	 document.getElementById("yg").innerHTML = theirGuess;
}
}



