import React, { useState } from "react";
import PropTypes from "prop-types";
import MiniCard from "./MiniCard";
import { cardArrayPropTypes } from "../cardPropTypes";

function Deck({ deck, position, setPlayerCardPicked, validPlayerSelection }) {
  const [showHover, setShowHover] = useState(false);
  return (
    <div className="text-yellow-700 h-[20%] xl:w-1/2">
      {position === "bot" && (
        <div className="flex justify-center items-end h-[10%] relative w-full gap-4">
          <h2>My deck</h2>
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
            showHover={showHover}
            setShowHover={setShowHover}
          />
        ))}
        <button
          type="button"
          className="absolute bg-black text-white rounded-full h-14 w-14 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={() => setShowHover(!showHover)}
        >
          Show Stats
        </button>
      </div>
      {position === "top" && (
        <h2 className="flex justify-center items-start h-[10%]">
          Opponent Deck
        </h2>
      )}
    </div>
  );
}

Deck.propTypes = {
  deck: cardArrayPropTypes.isRequired,
  position: PropTypes.string.isRequired,
  setPlayerCardPicked: PropTypes.func.isRequired,
  validPlayerSelection: PropTypes.bool.isRequired,
};

export default Deck;
