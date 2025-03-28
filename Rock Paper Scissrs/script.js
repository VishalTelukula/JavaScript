const choices = ["rock", "paper", "scissors"];

document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", function () {
    let playerChoice = this.id;
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = getWinner(playerChoice, computerChoice);

    document.getElementById(
      "result"
    ).textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
  });
});

function getWinner(player, computer) {
  if (player === computer) return "It's a tie!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win! 🎉";
  } else {
    return "Computer wins! 🤖";
  }
}
//  User clicks a button → JavaScript detects the click.
//  Player’s choice is stored → We get the id of the clicked button.
//  Computer picks randomly → Math.random() generates a random choice.
//  Winner is decided → The getWinner() function compares choices.
//  Result is shown → The text inside <h2 id="result"> is updated.
