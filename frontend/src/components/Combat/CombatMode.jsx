import React, { useState } from "react";
import PropTypes from "prop-types";
import MiniCard from "../Global/MiniCard";
import Card from "../Global/Card";
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

  return (
    <main className="flex flex-col h-screen justify-center items-center">
      <section className="text-yellow-700 h-[20%] xl:w-1/2">
        <div className="grid grid-cols-6 h-[90%] w-full">
          {playerTwoDeck.map((deckCard) => (
            <MiniCard
              dataDeck={deckCard}
              key={deckCard.id}
              selectCardToPlay={() => {
                setPlayerTwoCardPicked(deckCard);
              }}
              ValidPlayerTwoSelection={validPlayerTwoSelection}
            />
          ))}
        </div>
        <h2 className="text-center h-[10%]">Opponent Deck</h2>
      </section>
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

      <section className="text-yellow-700 h-[20%] xl:w-1/2">
        <h2 className="text-center h-[10%]">My deck</h2>
        <div className="grid grid-cols-6 h-[90%]">
          {playerOneDeck.map((deckCard) => (
            <MiniCard
              dataDeck={deckCard}
              key={deckCard.id}
              selectCardToPlay={() => {
                setPlayerOneCardPicked(deckCard);
              }}
              ValidPlayerOneSelection={validPlayerOneSelection}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

CombatMode.propTypes = {
  playerOneDeck: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      powerstats: PropTypes.objectOf(
        PropTypes.shape({
          intelligence: PropTypes.number,
          strength: PropTypes.number,
          speed: PropTypes.number,
          durability: PropTypes.number,
          power: PropTypes.number,
          combat: PropTypes.number,
        })
      ),
      image: PropTypes.objectOf(PropTypes.shape({ url: PropTypes.string })),
    })
  ).isRequired,
  playerTwoDeck: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      powerstats: PropTypes.objectOf(
        PropTypes.shape({
          intelligence: PropTypes.number,
          strength: PropTypes.number,
          speed: PropTypes.number,
          durability: PropTypes.number,
          power: PropTypes.number,
          combat: PropTypes.number,
        })
      ),
      image: PropTypes.shape({ url: PropTypes.string }),
    })
  ).isRequired,
  setPlayerOneDeck: PropTypes.func.isRequired,
  setPlayerTwoDeck: PropTypes.func.isRequired,
};
