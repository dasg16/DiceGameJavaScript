//Author: Gourav Das

'use strict';

let finalScorePlayer1 = 0;

let finalScorePlayer2 = 0;

let finalScore = 0;

let activePlayer = 0;

let tempScore = 0;

//Initializing Player 1 and 2 scores to 0.
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;

let dice = document.querySelector('.dice').getAttribute('src');

//Roll Dice button Logic
document.querySelector('.btn--roll').addEventListener('click', function () {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;

  document
    .querySelector('.dice')
    .setAttribute('src', `dice-${randomNumber}.png`);

  if (randomNumber === 1) {
    tempScore = 0;
    finalScore = finalScore + tempScore;
    displayCurrentScore(tempScore);
    switchPlayers();
  } else {
    tempScore = tempScore + randomNumber;
  }
  displayCurrentScore(tempScore);
});

//Hold button Logic
document.querySelector('.btn--hold').addEventListener('click', function () {
  finalScore = finalScore + tempScore;
  reset();
  switchPlayers();
});

//Reset Logic
let reset = function () {
  displayCurrentScore(0);
  tempScore = 0;
};

//Reset New Game
document.querySelector('.btn--new').addEventListener('click', function () {
  document.location.reload();
});

//Swwitch Player Logic
let switchPlayers = function () {
  switch (activePlayer) {
    case 0:
      finalScorePlayer1 = finalScorePlayer1 + finalScore;
      displayTotalScore();
      switchPlayerView(0, 1);
      activePlayer = 1;
      break;

    case 1:
      finalScorePlayer2 = finalScorePlayer2 + finalScore;
      displayTotalScore();
      switchPlayerView(1, 0);
      activePlayer = 0;
      break;

    default:
      console.log('Not a valid condition');
  }
  finalScore = 0;
};

//Display total score of each player
let displayTotalScore = () => {
  if (activePlayer === 0) {
    document.getElementById(`score--${activePlayer}`).textContent =
      finalScorePlayer1;
  } else {
    document.getElementById(`score--${activePlayer}`).textContent =
      finalScorePlayer2;
  }
};

//Display current score of each player
let displayCurrentScore = tempScore => {
  document.getElementById(`current--${activePlayer}`).textContent = tempScore;
};

//Switch Player View Effect using toggle
let switchPlayerView = (activePlayer, inactivePlayer) => {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');

  document
    .querySelector(`.player--${inactivePlayer}`)
    .classList.toggle('player--active');
};
