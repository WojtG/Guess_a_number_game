"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const messageDisplay = function (message) {
  return (document.querySelector(".message").textContent = message);
};

document.querySelector(".check").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".guess").value);
  if (!inputNumber) {
    messageDisplay("Insert the number!");
  } else if (inputNumber > 20 || inputNumber < 1) {
    messageDisplay("Pick a number between 1 and 20!");
  } else if (inputNumber !== randomNumber) {
    if (score > 1) {
      messageDisplay(
        `Too ${inputNumber > randomNumber ? "high 📈" : "low 📉"}`
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      messageDisplay("You lost ❌");
    }
  } else {
    messageDisplay("Congratulations, You guessed the number!😎");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  messageDisplay("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
