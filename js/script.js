let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const computerSelected = () => {
    const computerOptions = ['rock', 'paper', 'scissors'];
    const computerRandom = Math.floor(Math.random() * 3);
    return computerOptions[computerRandom];
}

const playRound = (playerSelect, computerSelect) => {
    const player = playerSelect;       
    const computer = computerSelect;

    if (player === computer) {
        return "It's A Tie!";
    } else if (
        player === "rock" && computerSelect === "scissors" ||
        player === "paper" && computerSelect === "rock" ||
        player === "scissors" && computerSelect === "paper"
    ) {
        playerScore++;
        return "You Win!";
    } else {
        computerScore++;
        return "You Lose!";
    }
}

const playGame = (playerChoices, computerChoices) => {

    if (roundCount < 5) {
        roundCount++;
    } else {
        return;
    }

    playRound(playerChoices, computerChoices);

}

const gameButtons = document.querySelectorAll('button');

gameButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const player = e.target.classList.value;
        const computer = computerSelected();

        playGame(player, computer);

        screenDisplay(roundCount, player, computer, button);
    })
});

const displayRounds = document.querySelector(".sub-title");
const displayGameResult = document.querySelector(".game-prompt");
const playerImage = document.querySelector(".player-image");
const computerImage = document.querySelector(".player-display");
const playerSelect = document.querySelector(".player-selected");
const computerSelect = document.querySelector(".computer-selected")

const screenDisplay = (rounds, player, computer, button) => {
    const currentRound = rounds;
    const gameResult = playRound(player, computer);

    displayRounds.textContent = `Round ${currentRound}`;
    displayGameResult.textContent = gameResult;
    playerSelect.textContent = player;
    computerSelect.textContent = computer;

    if (currentRound < 5) {
        console.log(button);
    }
}

const scoreDisplay = () => {
    console.log(playerScore, computerScore)
}

