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
    setPlayerOneDeck(
      playerOneDeck.filter((card) => card.id !== playerOneCardPicked.id)
    );
    setPlayerTwoDeck(
      playerTwoDeck.filter((card) => card.id !== playerTwoCardPicked.id)
    );
  }

  if (playerOneDeck.length === 0 || playerTwoDeck.length === 0) {
    if (scorePlayerOne > scorePlayerTwo) {
      setWinner("Player One");
    } else if (scorePlayerOne < scorePlayerTwo) {
      setWinner("Player Two");
    } else {
      setWinner("Draw");
    }
  }

  return (
    <main className="flex flex-col h-screen justify-center items-center">
      <Deck
        deck={playerTwoDeck}
        position="top"
        setPlayerCardPicked={setPlayerTwoCardPicked}
        validPlayerSelection={validPlayerTwoSelection}
      />
      <section className="font-xl h-[60%] w-screen text-yellow-800 flex flex-col items-center place-content-center relative">
        <div className="flex-1 grid grid-cols-3 justify-center items-center">
          <Player
            score={scorePlayerTwo}
            playerCardPicked={playerTwoCardPicked}
            setValidPlayerSelection={setValidPlayerTwoSelection}
            player="Player Two"
          />
          <span className="h-full w-full flex flex-col justify-evenly items-center">
            <h1 className="text-yellow-700 text-3xl -rotate-45">
              VERSUS <br /> {stat}
            </h1>
          </span>

          <Player
            score={scorePlayerOne}
            playerCardPicked={playerOneCardPicked}
            setValidPlayerSelection={setValidPlayerOneSelection}
            player="Player One"
          />
        </div>
      </section>

      <Deck
        deck={playerOneDeck}
        position="bot"
        setPlayerCardPicked={setPlayerOneCardPicked}
        validPlayerSelection={validPlayerOneSelection}
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
};

export default CombatMode;
