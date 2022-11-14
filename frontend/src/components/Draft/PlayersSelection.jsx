import React from "react";
import PropTypes from "prop-types";
import Card from "../Global/Card";
import MiniCard from "../Global/MiniCard";

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
      <div className="text-yellow-700 h-[20%] xl:w-1/2">
        <div className="grid grid-cols-6 h-[90%] w-full overflow-hidden">
          {playerTwoDeck.map((el) => (
            <MiniCard dataDeck={el} />
          ))}
        </div>
        <h2 className="text-center h-[10%]">Opponent Deck</h2>
      </div>

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
      <div className="text-yellow-700 h-[20%] xl:w-1/2">
        <h2 className="text-center h-[10%]">My deck</h2>
        <div className="grid grid-cols-6 h-[90%]">
          {playerOneDeck.map((el) => (
            <MiniCard dataDeck={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

PlayersSelection.propTypes = {
  playerOneDeck: PropTypes.arrayOf(
    PropTypes.objectOf(
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
    )
  ).isRequired,
  playerTwoDeck: PropTypes.arrayOf(
    PropTypes.objectOf(
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
    )
  ).isRequired,
  characters: PropTypes.arrayOf(
    PropTypes.objectOf(
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
    )
  ).isRequired,
  setPlayerOneDeck: PropTypes.func.isRequired,
  setPlayerTwoDeck: PropTypes.func.isRequired,
  setCharacters: PropTypes.func.isRequired,
  draftRound: PropTypes.number.isRequired,
  setDraftRound: PropTypes.func.isRequired,
  setValidIds: PropTypes.func.isRequired,
};
