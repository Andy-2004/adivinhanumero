let randomNumber = Math.floor(Math.random() * 100);
let trie = 0;
console.log(randomNumber);
function checkGuess() {
  let guess = document.getElementById("guess").value;
  let message = document.getElementById("message");
  trie++;

  if (guess == randomNumber) {
    message.innerHTML =
      "Congratulation, you guessed the number in " + trie + " trie !";
  } else if (guess < randomNumber) {
    message.innerHTML = "Too low (muito baixo) try again!";
  } else {
    message.innerHTML = "Too high (muito alto) try again!";
  }
}
