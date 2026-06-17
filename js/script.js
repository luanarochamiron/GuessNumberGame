const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");

input.focus();

const resetGame = () => {
  randomNum = Math.floor(Math.random() * 100); 
  chance = 10; 
  input.disabled = false; 
  remainChances.textContent = chance; 
  guess.textContent = ""; 
  guess.style.color = "#333";
  input.value = ""; 
  checkButton.textContent = "Check"; 
};

let randomNum = Math.floor(Math.random() * 100);
let chance = 10;

checkButton.addEventListener("click", () => {
  if (input.disabled) {
    
    resetGame();
    return;
  }
  chance--; 
  let inputValue = input.value; 
  if (inputValue == randomNum) { 
    [guess.textContent, input.disabled] = ["Contgrats! You found the number.", true];
    [checkButton.textContent, guess.style.color] = ["Replay", "#27ae60"];
  } else if (inputValue > randomNum && inputValue < 100) { // Guess is too high
    [guess.textContent, remainChances.textContent] = ["Your guess is high", chance];
    guess.style.color = "#333";
  } else if (inputValue < randomNum && inputValue > 0) { // Guess is too low
    [guess.textContent, remainChances.textContent] = ["Your guess is low", chance];
    guess.style.color = "#333";
  } else { // Invalid input (not in the range 1-99)
    [guess.textContent, remainChances.textContent] = ["Your number is invalid", chance];
    guess.style.color = "#e74c3c";
  }
  if (chance == 0) { // No chances left, game over
    [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
    [guess.textContent, guess.style.color] = ["You lost the game", "#e74c3c"];
  }
});