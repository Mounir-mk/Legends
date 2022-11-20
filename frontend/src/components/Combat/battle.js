function battle(
  setscorePlayertwo,
  setscorePlayerOne,
  setValidPlayerOneSelection,
  setValidPlayerTwoSelection,
  setPlayerOneCardPicked,
  setPlayerTwoCardPicked,
  playerOneCardPicked,
  playerTwoCardPicked,
  validPlayerOneSelection,
  validPlayerTwoSelection,
  setRound,
  round,
  stat
) {
  if (validPlayerOneSelection === true && validPlayerTwoSelection === true) {
    const playerOneStat = parseInt(playerOneCardPicked.powerstats[stat], 10);
    const playerTwoStat = parseInt(playerTwoCardPicked.powerstats[stat], 10);
    if (playerOneStat > playerTwoStat) {
      setscorePlayerOne((old) => old + 1);
    } else if (playerOneStat < playerTwoStat) {
      setscorePlayertwo((old) => old + 1);
    }
    setValidPlayerOneSelection(false);
    setValidPlayerTwoSelection(false);
    setPlayerOneCardPicked(null);
    setPlayerTwoCardPicked(null);
    // setRound(round + 1);
  }
}

export default battle;
