import React from "react";
// eslint-disable-next-line import/no-unresolved
import { useAutoAnimate } from "@formkit/auto-animate/react";
import PropTypes from "prop-types";
import Card from "../Global/Card";
import Deck from "../Global/Deck";
import { cardArrayPropTypes } from "../cardPropTypes";

export default function PlayersSelection({
  playerOneDeck,
  setPlayerOneDeck,
  playerTwoDeck,
  setPlayerTwoDeck,
  characters,
  setCharacters,
  draftRound,
  setDraftRound,
  player1,
  player2,
}) {
  const [parent] = useAutoAnimate();
  return (
    <main className="flex flex-col h-screen justify-between items-center">
      <div ref={parent} className="h-[20%] xl:w-1/2">
        <Deck deck={playerTwoDeck} position="top" player={player2} />
      </div>

      <section
        ref={parent}
        className="Container flex items-center w-screen overflow-x-scroll h-full md:justify-center md:overflow-hidden gap-6"
      >
        {characters.map((character) => (
          <Card
            draftRound={draftRound}
            key={character.id}
            character={character}
            select={() => {
              const addSelectedCard = (oldValues) => [...oldValues, character];
              const addOtherCards = (oldValues) => [
                ...oldValues,
                ...characters.filter(
                  (otherCharacter) => otherCharacter.id !== character.id
                ),
              ];

              if (draftRound % 2 === 0) {
                setPlayerTwoDeck(addSelectedCard);
                setPlayerOneDeck(addOtherCards);
              } else {
                setPlayerOneDeck(addSelectedCard);
                setPlayerTwoDeck(addOtherCards);
              }

              setCharacters([]);
              setDraftRound(() => draftRound + 1);
            }}
          />
        ))}
      </section>
      <div ref={parent} className="h-[20%] xl:w-1/2">
        <Deck deck={playerOneDeck} position="bot" player={player1} />
      </div>
    </main>
  );
}

PlayersSelection.propTypes = {
  playerOneDeck: cardArrayPropTypes.isRequired,
  playerTwoDeck: cardArrayPropTypes.isRequired,
  characters: cardArrayPropTypes.isRequired,
  setPlayerOneDeck: PropTypes.func.isRequired,
  setPlayerTwoDeck: PropTypes.func.isRequired,
  setCharacters: PropTypes.func.isRequired,
  draftRound: PropTypes.number.isRequired,
  setDraftRound: PropTypes.func.isRequired,
  player1: PropTypes.string.isRequired,
  player2: PropTypes.string.isRequired,
};
