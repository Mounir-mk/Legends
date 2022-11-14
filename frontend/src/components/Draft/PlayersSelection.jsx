import React from "react";
import PropTypes from "prop-types";
import Card from "../Global/Card";
import Deck from "../Global/Deck";

export default function PlayersSelection({
  playerOneDeck,
  setPlayerOneDeck,
  playerTwoDeck,
  setPlayerTwoDeck,
  characters,
  setCharacters,
  draftRound,
  setDraftRound,
  setValidIds,
}) {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Deck deck={playerTwoDeck} position="top" />

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

              setValidIds((oldValues) => oldValues.slice(3));
              setCharacters([]);
              setDraftRound(() => draftRound + 1);
            }}
          />
        ))}
      </div>
      <Deck deck={playerOneDeck} position="bot" />
    </div>
  );
}

PlayersSelection.propTypes = {
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
  characters: PropTypes.arrayOf(
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
  setCharacters: PropTypes.func.isRequired,
  draftRound: PropTypes.number.isRequired,
  setDraftRound: PropTypes.func.isRequired,
  setValidIds: PropTypes.func.isRequired,
};
