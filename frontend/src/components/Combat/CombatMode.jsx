import React, { useState } from "react";
import PropTypes from "prop-types";
import Player from "./Player";
import Deck from "../Global/Deck";
import battle from "./battle";

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
  // const [round, setRound] = useState(0);
  // const [playerOneStatClicked, setPlayerOneStatClicked] = useState(false);
  // const [playerTwoStatClicked, setPlayerTwoStatClicked] = useState(false);

  if (validPlayerOneSelection === true && validPlayerTwoSelection === true) {
    battle(
      setStat,
      setscorePlayerTwo,
      setscorePlayerOne,
      setValidPlayerOneSelection,
      setValidPlayerTwoSelection,
      setPlayerOneCardPicked,
      setPlayerTwoCardPicked,
      scorePlayerOne,
      scorePlayerTwo,
      playerOneCardPicked,
      playerTwoCardPicked
      // setRound,
      // playerOneStatClicked,
      // playerTwoStatClicked
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
      <h2 className="absolute bottom-[0%] right-[0%] text-2xl bg-red-600 h-40 z-10 rounded-2xl animate-pulse">
        Random Stat is : {stat}
      </h2>
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
          />
          <span className="h-full w-full flex flex-col justify-evenly items-center">
            {" "}
            <h1 className="text-yellow-700 text-3xl -rotate-45">VERSUS</h1>
          </span>

          <Player
            score={scorePlayerTwo}
            playerCardPicked={playerOneCardPicked}
            setValidPlayerSelection={setValidPlayerOneSelection}
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
  playerOneDeck: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      powerstats: PropTypes.shape({
        intelligence: PropTypes.string,
        strength: PropTypes.string,
        speed: PropTypes.string,
        durability: PropTypes.string,
        power: PropTypes.string,
        combat: PropTypes.string,
      }),
      image: PropTypes.PropTypes.shape({ url: PropTypes.string }),
    })
  ).isRequired,
  playerTwoDeck: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      powerstats: PropTypes.shape({
        intelligence: PropTypes.string,
        strength: PropTypes.string,
        speed: PropTypes.string,
        durability: PropTypes.string,
        power: PropTypes.string,
        combat: PropTypes.string,
      }),
      image: PropTypes.PropTypes.shape({ url: PropTypes.string }),
    })
  ).isRequired,
  setPlayerOneDeck: PropTypes.func.isRequired,
  setPlayerTwoDeck: PropTypes.func.isRequired,
  setWinner: PropTypes.func.isRequired,
  setDraftRound: PropTypes.func.isRequired,
};

export default CombatMode;
