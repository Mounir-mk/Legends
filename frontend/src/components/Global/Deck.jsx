import React from "react";
import PropTypes from "prop-types";
import MiniCard from "./MiniCard";
import { cardArrayPropTypes } from "../cardPropTypes";

function Deck({
  deck,
  position,
  setPlayerCardPicked,
  validPlayerSelection,
  player,
}) {
  return (
    <div className="text-yellow-700 h-[20%] xl:w-1/2">
      {position === "bot" && (
        <div className="flex justify-center items-end h-[10%] relative w-full gap-4">
          <h2>{player}</h2>
        </div>
      )}

      <div className="grid grid-cols-6 h-[90%] w-full relative">
        {deck.map((deckCard) => (
          <MiniCard
            dataDeck={deckCard}
            key={deckCard.id}
            position={position}
            selectCardToPlay={() => {
              setPlayerCardPicked(deckCard);
            }}
            validPlayerSelection={validPlayerSelection}
          />
        ))}
      </div>
      {position === "top" && (
        <h2 className="flex justify-center items-start h-[10%]">{player}</h2>
      )}
    </div>
  );
}

Deck.propTypes = {
  deck: cardArrayPropTypes.isRequired,
  position: PropTypes.string.isRequired,
  setPlayerCardPicked: PropTypes.func,
  validPlayerSelection: PropTypes.bool.isRequired,
  player: PropTypes.string.isRequired,
};

Deck.defaultProps = {
  setPlayerCardPicked: undefined,
};

export default Deck;
