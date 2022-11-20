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
  const statList = [
    "intelligence",
    "strength",
    "speed",
    "durability",
    "power",
    "combat",
  ];
  const statRandom = statList[random];
  setStat(statRandom);
  const playerOneStat = parseInt(
    playerOneCardPicked.powerstats[statRandom],
    10
  );
  const playerTwoStat = parseInt(
    playerTwoCardPicked.powerstats[statRandom],
    10
  );

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
