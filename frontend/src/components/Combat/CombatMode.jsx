import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../Global/Card";
import Deck from "../Global/Deck";
import battle from "./battle";

export default function CombatMode({
  playerOneDeck,
  setPlayerOneDeck,
  playerTwoDeck,
  setPlayerTwoDeck,
}) {
  const [playerOneCardPicked, setPlayerOneCardPicked] = useState(null);
  const [playerTwoCardPicked, setPlayerTwoCardPicked] = useState(null);
  const [validPlayerOneSelection, setValidPlayerOneSelection] = useState(false);
  const [validPlayerTwoSelection, setValidPlayerTwoSelection] = useState(false);
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreComputer, setScoreComputer] = useState(0);
  const [winner, setWinner] = useState(null);
  const [stat, setStat] = useState(null);
  const [round, setRound] = useState(0);
  // const [playerOneStatClicked, setPlayerOneStatClicked] = useState(false);
  // const [playerTwoStatClicked, setPlayerTwoStatClicked] = useState(false);

  if (validPlayerOneSelection === true && validPlayerTwoSelection === true) {
    battle(
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
      playerTwoCardPicked,
      setRound
    );
    setPlayerOneDeck(
      playerOneDeck.filter((card) => card.id !== playerOneCardPicked.id)
    );
    setPlayerTwoDeck(
      playerTwoDeck.filter((card) => card.id !== playerTwoCardPicked.id)
    );
  }

  if (playerOneDeck.length === 0) {
    if (scorePlayer > scoreComputer) {
      setWinner("Player1");
    } else {
      setWinner("Player2");
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
      {round === 6 ? (
        <div className="font-xl h-[60%] w-screen text-yellow-800 flex items-center">
          <h1>Winner is {winner}</h1>
        </div>
      ) : (
        <section className="font-xl h-[60%] w-screen text-yellow-800 flex flex-col items-center place-content-center relative">
          <h2 className="absolute bottom-[0%] right-[0%] text-2xl bg-red-600 h-40 z-10 rounded-2xl animate-pulse">
            Random Stat is : {stat}
          </h2>
          <div className="flex-1 grid grid-cols-3 justify-center items-center">
            <div>
              <h1 className="text-yellow-700 text-xl text-center">
                Player Two Score : {scoreComputer}
              </h1>
              {playerTwoCardPicked !== null && (
                <div className="flex flex-col justify-center items-center">
                  <Card character={playerTwoCardPicked} />
                  <button
                    type="button"
                    className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 active:bg-green-50 focus:bg-green-500"
                    onClick={() => setValidPlayerTwoSelection(true)}
                  >
                    Valid Selection
                  </button>
                </div>
              )}
            </div>
            <span className="h-full w-full flex flex-col justify-evenly items-center">
              {" "}
              <h1 className="text-yellow-700 text-3xl -rotate-45">VERSUS</h1>
            </span>

            <div>
              <h1 className="text-yellow-700 text-xl text-center">
                Player One Score : {scorePlayer}
              </h1>
              {playerOneCardPicked !== null && (
                <div className="flex flex-col justify-center items-center">
                  <Card character={playerOneCardPicked} />
                  <button
                    type="button"
                    className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 active:bg-green-50 focus:bg-green-500"
                    onClick={() => setValidPlayerOneSelection(true)}
                  >
                    Valid Selection
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

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
};
