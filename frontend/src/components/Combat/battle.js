function battle(
  setStat,
  setscorePlayertwo,
  setscorePlayerOne,
  setValidPlayerOneSelection,
  setValidPlayerTwoSelection,
  setPlayerOneCardPicked,
  setPlayerTwoCardPicked,
  scorePlayerOne,
  scorePlayertwo,
  playerOneCardPicked,
  playerTwoCardPicked,
  playerOneStatClicked,
  playerTwoStatClicked
) {
  console.log(Object.entries(playerOneCardPicked.powerstats));

  setValidPlayerOneSelection(false);
  setValidPlayerTwoSelection(false);
  setPlayerOneCardPicked(null);
  setPlayerTwoCardPicked(null);
  // setRound((old) => old + 1);
}
export default battle;
