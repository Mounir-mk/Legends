import React, { useState } from "react";
import PropTypes from "prop-types";
import Player from "./Player";
import Deck from "../Global/Deck";
import battle from "./battle";
import { cardArrayPropTypes } from "../cardPropTypes";

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
  setDraftRound(1);
  const [playerOneCardPicked, setPlayerOneCardPicked] = useState(null);
  const [playerTwoCardPicked, setPlayerTwoCardPicked] = useState(null);
  const [validPlayerOneSelection, setValidPlayerOneSelection] = useState(false);
  const [validPlayerTwoSelection, setValidPlayerTwoSelection] = useState(false);
  const [scorePlayerOne, setscorePlayerOne] = useState(0);
  const [scorePlayerTwo, setscorePlayerTwo] = useState(0);
  const [stat, setStat] = useState(null);

  if (validPlayerOneSelection === true && validPlayerTwoSelection === true) {
    battle(
      setStat,
      setscorePlayerTwo,
      setscorePlayerOne,
      setValidPlayerOneSelection,
      setValidPlayerTwoSelection,
      setPlayerOneCardPicked,
      setPlayerTwoCardPicked,
      playerOneCardPicked,
      playerTwoCardPicked
    );
  }

  if (playerOneDeck.length === 0 && playerTwoDeck.length === 0) {
    if (scorePlayerOne > scorePlayerTwo) {
      setWinner(player1);
    } else if (scorePlayerOne < scorePlayerTwo) {
      setWinner(player2);
    } else {
      setWinner("Draw");
    }
  }

  return (
    <main className="flex flex-col h-screen justify-between items-center">
      <Deck
        deck={playerTwoDeck}
        position="top"
        setPlayerCardPicked={setPlayerTwoCardPicked}
        validPlayerSelection={validPlayerTwoSelection}
        setValidPlayerSelection={setValidPlayerTwoSelection}
        setPlayerDeck={setPlayerTwoDeck}
        player={player2}
      />

      <section className="h-full flex flex-col justify-between items-center w-full md:grid md:grid-cols-3 md:w-1/2 md:justify-center md:items-center">
        <Player
          score={scorePlayerTwo}
          playerCardPicked={playerTwoCardPicked}
          player={player2}
          topLeft
        />
        <div className="h-full w-full relative">
          <h1 className="text-[#54EB75] text-xl text-center z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-3xl">
            VERSUS <br /> {stat}
          </h1>
        </div>

        <Player
          score={scorePlayerOne}
          playerCardPicked={playerOneCardPicked}
          player={player1}
        />
      </section>

      <Deck
        deck={playerOneDeck}
        position="bot"
        setPlayerCardPicked={setPlayerOneCardPicked}
        validPlayerSelection={validPlayerOneSelection}
        setValidPlayerSelection={setValidPlayerOneSelection}
        player={player1}
        setPlayerDeck={setPlayerOneDeck}
      />
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
