function battle(
  setStat,
  setscorePlayertwo,
  setscorePlayerOne,
  setValidPlayerOneSelection,
  setValidPlayerTwoSelection,
  setPlayerOneCardPicked,
  setPlayerTwoCardPicked,

  playerOneCardPicked,
  playerTwoCardPicked
) {
  const random = Math.floor(Math.random() * 6);
  const stats = [
    "intelligence",
    "strength",
    "speed",
    "durability",
    "power",
    "combat",
  ];
  const stat = stats[random];
  setStat(stat);
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
}

export default battle;
