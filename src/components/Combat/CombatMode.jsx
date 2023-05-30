import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-unresolved
import { useAutoAnimate } from "@formkit/auto-animate/react";
import PropTypes from "prop-types";
import Player from "./Player";
import Deck from "../Global/Deck";
import { cardArrayPropTypes } from "../cardPropTypes";
import versus from "../../assets/versus.png";
import battle from "./battle";

function CombatMode({
  playerOneDeck,
  setPlayerOneDeck,
  playerTwoDeck,
  setPlayerTwoDeck,
  setWinner,
  setDraftRound,
  player1,
  player2,
}) {
  const [parent] = useAutoAnimate();
  setDraftRound(1);
  const [playerOneCardPicked, setPlayerOneCardPicked] = useState(null);
  const [playerTwoCardPicked, setPlayerTwoCardPicked] = useState(null);
  const [validPlayerOneSelection, setValidPlayerOneSelection] = useState(false);
  const [validPlayerTwoSelection, setValidPlayerTwoSelection] = useState(false);
  const [scorePlayerOne, setscorePlayerOne] = useState(0);
  const [scorePlayerTwo, setscorePlayerTwo] = useState(0);
  const [stat, setStat] = useState(null);

  function randomStat() {
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
  }

  useEffect(() => {
    randomStat();
    battle(
      validPlayerOneSelection,
      validPlayerTwoSelection,
      stat,
      playerOneCardPicked,
      playerTwoCardPicked,
      setscorePlayerOne,
      setscorePlayerTwo,
      setPlayerOneCardPicked,
      setPlayerTwoCardPicked,
      setValidPlayerOneSelection,
      setValidPlayerTwoSelection
    );
  }, [playerOneCardPicked && playerTwoCardPicked]);

  if (playerOneDeck.length === 0 && playerTwoDeck.length === 0) {
    setTimeout(() => {
      if (scorePlayerOne > scorePlayerTwo) {
        setWinner(player1);
      } else if (scorePlayerOne < scorePlayerTwo) {
        setWinner(player2);
      } else {
        setWinner("Draw");
      }
    }, 2000);
  }

  return (
    <main
      ref={parent}
      className="flex flex-col h-screen justify-between items-center"
    >
      <div ref={parent} className="h-[20%] xl:w-1/2">
        <Deck
          deck={playerTwoDeck}
          position="top"
          setPlayerCardPicked={setPlayerTwoCardPicked}
          validPlayerSelection={validPlayerTwoSelection}
          setValidPlayerSelection={setValidPlayerTwoSelection}
          setPlayerDeck={setPlayerTwoDeck}
          player={player2}
        />
      </div>

      <section
        ref={parent}
        className="h-full flex flex-col justify-between items-center w-full md:grid md:grid-cols-3 md:w-1/2 md:justify-center md:items-center"
      >
        <Player
          score={scorePlayerTwo}
          playerCardPicked={playerTwoCardPicked}
          player={player2}
          topLeft
        />
        <div className="h-full w-full relative">
          <div className="text-center z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-3xl flex flex-col items-center justify-center">
            <img src={versus} alt="versus" />
            <p className="rounded-lg animate-pulse text-green-300 bg-green-600 text-lg p-1">
              {stat}
            </p>
          </div>
        </div>

        <Player
          score={scorePlayerOne}
          playerCardPicked={playerOneCardPicked}
          player={player1}
        />
      </section>
      <div ref={parent} className="h-[20%] xl:w-1/2">
        <Deck
          deck={playerOneDeck}
          position="bot"
          setPlayerCardPicked={setPlayerOneCardPicked}
          validPlayerSelection={validPlayerOneSelection}
          setValidPlayerSelection={setValidPlayerOneSelection}
          player={player1}
          setPlayerDeck={setPlayerOneDeck}
        />
      </div>
    </main>
  );
}

CombatMode.propTypes = {
  playerOneDeck: cardArrayPropTypes.isRequired,
  playerTwoDeck: cardArrayPropTypes.isRequired,
  setPlayerOneDeck: PropTypes.func.isRequired,
  setPlayerTwoDeck: PropTypes.func.isRequired,
  setWinner: PropTypes.func.isRequired,
  setDraftRound: PropTypes.func.isRequired,
  player1: PropTypes.string.isRequired,
  player2: PropTypes.string.isRequired,
};

export default CombatMode;
