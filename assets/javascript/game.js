var winSound = document.getElementById("winSound");

function playAudio() {
    winSound.play();
}

function newGame() {
	isGameRunning = true;
	guessesRemaining = 8;
	randomWord = gameWords[Math.floor(Math.random()*gameWords.length)];
	wordToBeGuessed = [];
	wrongGuess = [];
}

var wordToBeGuessed = [];
var wrongGuess = [];
var userGuess;
var gameWords = ['cloud','tifa','barret','aeris','cid','yuffie','squall','quistis','zell','selphie','rinoa','irvine','laguna','seifer','tidus','yuna','auron','kimahri','wakka','lulu','rikku','seymour','paine','sephiroth'];
var	randomWord = gameWords[Math.floor(Math.random()*gameWords.length)];

var wins = 0;
var losses = 0;
var isGameRunning = true;
var guessesRemaining = 8;
var resetKeyCode;

for (var i = 0; i < randomWord.length; i++) {
	wordToBeGuessed[i] = "_";
}

if (isGameRunning) {

		document.onkeyup = function(event) {

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

			if (wrongGuess.indexOf(userGuess) == -1) {

				for (var i = 0; i < randomWord.length; i++) {
					if (userGuess == randomWord.charAt(i)) {
					wordToBeGuessed[i] = userGuess;
					}

				} 
			}

			if (wordToBeGuessed.indexOf(userGuess) == -1 && wrongGuess.indexOf(userGuess) == -1){
				wrongGuess.push(userGuess);
				guessesRemaining--;
			}

			var html = "<h1>Welcome to Hangman<br> Lets Play</h1>" +
			"<p>" + wordToBeGuessed + "</p>" +
			"<p>Guesses remaining: " + guessesRemaining + "</p>" +
			"<p>Letters guessed: " + wrongGuess + "</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>";


			document.querySelector('#Hangman').innerHTML = html;

		if (wordToBeGuessed.indexOf("_") == -1) {
			playAudio();
			console.log("YOU WIN");
			wins++;
			isGameRunning = false;
		}
		else if (guessesRemaining == 0) {
			console.log("SORRY, YOU HAVE NO MORE GUESSES");
			losses++;
			isGameRunning = false;
		} 

		}
}

else {
	document.onkeyup = function(event.keyCode = "13") {
	newGame();
	}
}