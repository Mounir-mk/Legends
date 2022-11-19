import React from "react";
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
  return (
    <div className="flex flex-col h-screen justify-between items-center">
      <Deck deck={playerTwoDeck} position="top" player={player2} />

      <div className="Container flex items-center w-screen overflow-x-scroll h-full xl:justify-center xl:overflow-hidden gap-6">
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
      </div>
      <Deck deck={playerOneDeck} position="bot" player={player1} />
    </div>
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
