let currentPlayerScore = 0;
let currentComputerScore = 0;
let currentRound = 0;

const playerSelection = function (playerSelect) {
    let currentSelection = playerSelect;
    return currentSelection;
};

const computerSelection = function () {
    const randomSelection = Math.floor(Math.random() * 3);
    const selectionOption = ["rock", "paper", "scissors"];
    return selectionOption[randomSelection];
}

const generateGameResult = function (playerSelect, computerSelect) {

    const playerSelected = playerSelection("rock");
    const computerSelected = computerSelection();

    if (
        playerSelected === "rock" && computerSelected === "scissors" ||
        playerSelected === "paper" && computerSelected === "rock" ||
        playerSelected === "scissors" && computerSelected === "paper"
    ) {
        return `You Win! ${playerSelected} beats ${computerSelected}`;
    } else if (
        playerSelected === computerSelected
    ) {
        return `It's a Draw! Player Ties`;
    } else {
        return `You Lose! Computer beats Player`;
    }

}

const validateWinnerOfGame = function (playerSelect, computerSelect) {
    
    const gameWinner = generateGameResult(playerSelect, computerSelect);

    if (gameWinner.includes("You Win!")) {
        return "You Win!";
    } else if (gameWinner.includes("You Lose!")) {
        return "You Lose!";
    } else {
        return "It's a Draw!";
    }

}

// The Declaration for DOM Manipulation variables.

const displayRound = document.querySelector(".round-display");
const currentGameResult = document.querySelector(".current-game-result");
const playersImages = document.querySelector(".player-images");
const computerImages = document.querySelector(".computer-images");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const gameButtons = document.querySelectorAll('button');
const gameSelection = document.querySelector(".game-selection");
const declaredWinner = document.querySelector(".declared-winner");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const dialogModal = document.querySelector("dialog");
const playButton = document.querySelector("#play-again");
const playerIcon = document.querySelector(".player-images");
const computerIcon = document.querySelector(".computer-images")

gameButtons.forEach((buttons) => {
    buttons.addEventListener("click", () => {

        const playerSelect = playerSelection(buttons.className);
        const computerSelect = computerSelection();

        displayGameRounds(playerSelect, computerSelect);
        displaySelections(playerSelect, computerSelect);
        displayScore(playerSelect, computerSelect);
        displayPlayerDecision(playerSelect, computerSelect);
    });
});

const displayGameRounds = function (playerSelect, computerSelect) {

    const gameRounds = generateGameResult(playerSelect, computerSelect);

    if (gameRounds.includes("You Win!")) {
        currentRound++;
    } else if (gameRounds.includes("You Lose!")) {
        currentRound++;
    } else {
        currentRound++;
    }

    displayRound.innerText = `Round ${currentRound}`;

}

const displaySelections = function (playerSelect, computerSelect) {
    
    const gameResult = generateGameResult(playerSelect, computerSelect);

    if (gameResult) {
        currentGameResult.innerHTML = `${gameResult}`;
    }

}

const displayGameIcons = function (playerIcons, computerIcons) {

}

const displayScore = function (playerSelect, computerSelect) {
    
    const declareWinner = validateWinnerOfGame(playerSelect, computerSelect);

    if (declareWinner === "You Win!") {
        currentPlayerScore++;
    } else if (declareWinner === "You Lose!") {
        currentComputerScore++;
    }

    playerScore.innerText = currentComputerScore;
    computerScore.innerText = currentPlayerScore;

    if (currentPlayerScore == 5 || currentComputerScore == 5) {
        displayModalWinner(currentPlayerScore, computerScore);
    } else {
        return;
    }

}

const displayPlayerDecision = function (playerSelect, computerSelect) {
    
    if (playerSelect && computerSelect) {
        gameSelection.innerText = `${playerSelect} vs ${computerSelect}`;
    }

}

const displayModalWinner = function (playerScore, computerScore) {
    
    if (playerScore == 5 || computerScore == 5) {
        [rockButton, paperButton, scissorsButton].forEach(button => button.disabled = true);

        if (dialogModal.style.display == "") {
            dialogModal.showModal();
        }
    }

}

playButton.addEventListener("click", () => {

    displayRound.textContent = "lets go 5 rounds";
    currentGameResult.textContent = "let's play !"
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    gameSelection.textContent = "player vs. computer";

    if (playButton.id == "play-again") {
        [rockButton, paperButton, scissorsButton].forEach(button => button.disabled = false);
        currentRound = 0;
        currentPlayerScore = 0;
        currentComputerScore = 0;
        displayRound.textContent = "lets go 5 rounds";
        currentGameResult.textContent = "let's play !"
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        gameSelection.textContent = "player vs. computer";
        dialogModal.close();
    }

});