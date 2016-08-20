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

	for (var i = 0; i < randomWord.length; i++) {
		wordToBeGuessed[i] = "_";
	}
	htmlDisplay();
	htmlDisplay2();
	htmlDisplay3();
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



document.onkeyup = function(event) {
	if (isGameRunning) {

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

		htmlDisplay();
		htmlDisplay2();
		htmlDisplay3();		

		if (wordToBeGuessed.indexOf("_") == -1) {
			playAudio();
			alert("YOU WIN. PRESS ENTER TO LOAD A NEW GAME");
			wins++;
			isGameRunning = false;
		}

		if (guessesRemaining == 0) {
			alert("YOU LOST. PRESS ENTER TO LOAD A NEW GAME");
			losses++;
			isGameRunning = false;
		} 

	} else {
		if (event.keyCode == "13") {
			newGame();
			alert("Preparing a new game");
		}
	}
}

function htmlDisplay() {
	var html = "<h1>Welcome to Hangman<br> Lets Play</h1>" +
		"<p>" + wordToBeGuessed + "</p>" +
		"<p>Guesses remaining: " + guessesRemaining + "</p>" +
		"<p>Letters guessed: " + wrongGuess + "</p>";


		document.querySelector('#Hangman').innerHTML = html;

}

function htmlDisplay2() {
	var html2 = "<p>Wins: " + wins + "</p>";


		document.querySelector('#Hangmanphead').innerHTML = html2;
		
}

function htmlDisplay3() {
	var html3 = "<p>Losses: " + losses + "</p>";


		document.querySelector('#Hangmanpbody').innerHTML = html3;
		
}