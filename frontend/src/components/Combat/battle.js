function battle(
  setStat,
  setScoreComputer,
  setScorePlayer,
  setValidPlayerOneSelection,
  setValidPlayerTwoSelection,
  setPlayerOneCardPicked,
  setPlayerTwoCardPicked,
  scorePlayer,
  scoreComputer,
  playerOneCardPicked,
  playerTwoCardPicked
) {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (randomNumber === 1) {
    setStat("intelligence");
    setTimeout(() => {
      if (
        parseInt(playerOneCardPicked.powerstats.intelligence, 10) >
        parseInt(playerTwoCardPicked.powerstats.intelligence, 10)
      ) {
        setScorePlayer(scorePlayer + 1);
      } else if (
        parseInt(playerOneCardPicked.powerstats.intelligence, 10) <
        parseInt(playerTwoCardPicked.powerstats.intelligence, 10)
      ) {
        setScoreComputer(scoreComputer + 1);
      }
    }, 200);
  }
  if (randomNumber === 2) {
    setStat("strength");
    setTimeout(() => {
      if (
        parseInt(playerOneCardPicked.powerstats.strength, 10) >
        parseInt(playerTwoCardPicked.powerstats.strength, 10)
      ) {
        setScorePlayer(scorePlayer + 1);
      } else if (
        parseInt(playerOneCardPicked.powerstats.strength, 10) <
        parseInt(playerTwoCardPicked.powerstats.strength, 10)
      ) {
        setScoreComputer(scoreComputer + 1);
      }
    }, 200);
  }
  if (randomNumber === 3) {
    setStat("speed");
    setTimeout(() => {
      if (
        parseInt(playerOneCardPicked.powerstats.speed, 10) >
        parseInt(playerTwoCardPicked.powerstats.speed, 10)
      ) {
        setScorePlayer(scorePlayer + 1);
      } else if (
        parseInt(playerOneCardPicked.powerstats.speed, 10) <
        parseInt(playerTwoCardPicked.powerstats.speed, 10)
      ) {
        setScoreComputer(scoreComputer + 1);
      }
    }, 200);
  }
  if (randomNumber === 4) {
    setStat("durability");
    setTimeout(() => {
      if (
        parseInt(playerOneCardPicked.powerstats.durability, 10) >
        parseInt(playerTwoCardPicked.powerstats.durability, 10)
      ) {
        setScorePlayer(scorePlayer + 1);
      } else if (
        parseInt(playerOneCardPicked.powerstats.durability, 10) <
        parseInt(playerTwoCardPicked.powerstats.durability, 10)
      ) {
        setScoreComputer(scoreComputer + 1);
      }
    }, 200);
  }
  if (randomNumber === 5) {
    setStat("power");
    setTimeout(() => {
      if (
        parseInt(playerOneCardPicked.powerstats.power, 10) >
        parseInt(playerTwoCardPicked.powerstats.power, 10)
      ) {
        setScorePlayer(scorePlayer + 1);
      } else if (
        parseInt(playerOneCardPicked.powerstats.power, 10) <
        parseInt(playerTwoCardPicked.powerstats.power, 10)
      ) {
        setScoreComputer(scoreComputer + 1);
      }
    }, 200);
  }
  if (randomNumber === 6) {
    setStat("combat");
    setTimeout(() => {
      if (
        parseInt(playerOneCardPicked.powerstats.combat, 10) >
        parseInt(playerTwoCardPicked.powerstats.combat, 10)
      ) {
        setScorePlayer(scorePlayer + 1);
      } else if (
        parseInt(playerOneCardPicked.powerstats.combat, 10) <
        parseInt(playerTwoCardPicked.powerstats.combat, 10)
      ) {
        setScoreComputer(scoreComputer + 1);
      } else {
        setScoreComputer(scoreComputer + 1);
        setScorePlayer(scorePlayer + 1);
      }
    }, 200);
  }
  setValidPlayerOneSelection(false);
  setValidPlayerTwoSelection(false);
  setPlayerOneCardPicked(null);
  setPlayerTwoCardPicked(null);
  // setRound((old) => old + 1);
}

export default battle;
