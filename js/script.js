let playerScore = 0;
let computerScore = 0;
let gameRound = 0;

const getComputerSelection = function () {
    let computerChoice = ['rock', 'paper', 'scissors'];
    let genRandom = Math.floor(Math.random() * 3);
    return computerChoice[genRandom];
}

const determineWinnerOfRound = function (playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection === "scissors") {
        return "You Win!";
    } else if (playerSelection == "paper" && computerSelection === "rock") {
        return "You Win!";
    } else if (playerSelection == "scissors" && computerSelection === "paper") {
        return "You Win!";
    } else if (playerSelection == computerSelection) {
        return "It's a Tie!";
    } else {
        return "You Lose!";
    }

}

const declareWinnerOfRound = function () {

    const roundResult = determineWinnerOfRound(player1, computer);

    if (roundResult.includes("You Win!")) {
        return `You Win! ${player1} beats ${computer}`;
    } else if (roundResult.includes("You Lose")) {
        return `You Lose! ${computer} beats ${player1}`;
    } else {
        return `Tie! ${player1} ties ${computer}`;
    }

}

const gameRounds = document.querySelector(".game-rounds");
const gamePrompt = document.querySelector(".play-prompt");
const gameButtons = document.querySelectorAll("button");
const playerImage = document.querySelector(".player-image");
const computerImage = document.querySelector(".computer-image");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const playerChoice = document.querySelector(".player-selected");
const computerChoice = document.querySelector(".computer-selected");
const dialogModal = document.querySelector("dialog");
const gameResult = document.querySelector("#game-result");

gameButtons.forEach((buttons) => {
    buttons.addEventListener("click", () => {

        const playerSelection = buttons.className;
        const computerSelection = getComputerSelection();

        displayGameRounds(playerSelection, computerSelection);
        displayGameResult(playerSelection, computerSelection);
        displayPlayerImage(playerSelection);
        displayGameScore(playerSelection, computerSelection);
        displayComputerImage(computerSelection);
        displayPlayerSelection(playerSelection);
        displayComputerSelection(computerSelection);
        displayGameOver(playerSelection, computerSelection);

    });

});

const displayGameRounds = function (player, computer) {

    const getRounds = determineWinnerOfRound(player, computer);

    if (gameRound > 0 || gameRound <= 5) {
        if (getRounds.includes("You Win!")) {
            gameRound++;
            gameRounds.textContent = `Round ${gameRound}`;
        } else if (getRounds.includes("You Lose!")) {
            gameRound++;
            gameRounds.textContent = `Round ${gameRound}`;
        } else {
            gameRound++;
            gameRounds.textContent = `Round ${gameRound}`;
        }
    }

}

const displayGameResult = function (player, computer) {

    const displayWinner = determineWinnerOfRound(player, computer);

    if (displayWinner === "You Win!") {
        gamePrompt.innerText = displayWinner;
    } else if (displayWinner === "You Lose!") {
        gamePrompt.innerText = displayWinner;
    } else {
        gamePrompt.innerText = displayWinner;
    }

}

const displayPlayerImage = function (player) {

    const playerIcon = player;

    if (playerIcon === "rock" || "paper" || "scissors") {
        if (playerIcon === "rock") {
            playerImage.innerHTML = `<img src="./images/${playerIcon}.png" class="display-icon" />`
        } else if (playerIcon === "paper") {
            playerImage.innerHTML = `<img src="./images/${playerIcon}.png" class="display-icon" />`
        } else {
            playerImage.innerHTML = `<img src="./images/${playerIcon}.png" class="display-icon" />`
        }
    }
}

const displayComputerImage = function(computer) {

    const computerIcon = computer;

    if (computerIcon === "rock") {
        computerImage.innerHTML = `<img src="./images/${computerIcon}.png" class="display-icon" />`;
    } else if (computerIcon === "paper") {
        computerImage.innerHTML = `<img src="./images/${computerIcon}.png" class="display-icon" />`;
    } else {
        computerImage.innerHTML = `<img src="./images/${computerIcon}.png" class="display-icon" />`
    }

}

const displayGameScore = function (player, computer) {

    const gameScores = determineWinnerOfRound(player, computer);

    if (gameScores.includes("You Win!")) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (gameScores.includes("You Lose!")) {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

}

const displayPlayerSelection = function (playerSelection) {

    const playerSelect = playerSelection;

    if (playerSelect === "rock") {
        playerChoice.textContent = playerSelect;
    } else if (playerSelect === "paper") {
        playerChoice.textContent = playerSelect;
    } else {
        playerChoice.textContent = playerSelect;
    }

}

const displayComputerSelection = function (computerSelection) {

    const computerSelect = computerSelection;

    if (computerSelection === "rock") {
        computerChoice.textContent = computerSelect;
    } else if (computerSelection === "paper") {
        computerChoice.textContent = computerSelect;
    } else {
        computerChoice.textContent = computerSelect;
    }

}

const displayGameOver = function (player, computer) {

    const winner = determineWinnerOfRound(player, computer);

    if (playerScore == 5 || computerScore == 5) {
        gameResult.textContent = winner;
        dialogModal.show();
    }

}