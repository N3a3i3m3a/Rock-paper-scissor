let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

function userChoice(choice) {
  const computerChoice = getComputerChoice();
  switch (choice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(choice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(choice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(choice, computerChoice);
      break;
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = "User: " + userScore;
  computerScore_span.innerHTML = "Computer: " + computerScore;
}

function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = "User: " + userScore;
  computerScore_span.innerHTML = "Computer: " + computerScore;
}

function draw(user, computer) {
  userScore_span.innerHTML = "User: " + userScore;
  computerScore_span.innerHTML = "Computer: " + computerScore;
}


function getWinner(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}
