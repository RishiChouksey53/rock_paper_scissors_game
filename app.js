let user_Score = 0;
let comp_Score = 0;

const choices = document.querySelectorAll(".choice");
const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#compScore");
const msg = document.querySelector("#msg");
const msgcont = document.querySelector(".msgContainer");
const genCompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3); //num range *-1
  return options[randomIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    user_Score += 1;
    msgcont.style.backgroundColor = "green";
    userScore.innerText = user_Score;
    msg.innerText = `You win! "${userChoice} beats ${compChoice}"`;
  } else {
    comp_Score += 1;
    msgcont.style.backgroundColor = "red";
    compScore.innerText = comp_Score;
    msg.innerText = `You lose. "${compChoice} beats ${userChoice}"`;
  }
};

const playGame = (userChoice) => {
  console.log("user choice", userChoice);
  const compChoice = genCompchoice();
  console.log("comp choice", compChoice);
  if (userChoice === compChoice) {
    msgcont.style.backgroundColor = "blue";

    msg.innerText = `Draw both players chose  ${userChoice},
    Let's play again.`;
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
