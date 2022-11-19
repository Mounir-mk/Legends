import React, { useState } from "react";
import PropTypes from "prop-types";
import MiniCard from "./MiniCard";
import { cardArrayPropTypes } from "../cardPropTypes";
import up from "../../assets/up.png";
import down from "../../assets/down.png";

function Deck({
  deck,
  position,
  setPlayerCardPicked,
  validPlayerSelection,
  player,
}) {
  const [showStats, setShowStats] = useState(false);
  const style =
    "button-style absolute bg-black text-white h-3 w-full flex justify-center items-center rounded-lg w-16 md:display-none";
  const buttonTop = `${style} bottom-0 left-1/2 transform -translate-x-1/2  `;
  const buttonBottom = `${style} top-0 left-1/2 transform -translate-x-1/2`;
  const nestedCondTop = showStats ? up : down;
  const nestedCondBottom = showStats ? down : up;
  return (
    <div className="text-yellow-700 h-[20%] xl:w-1/2">
      {position === "bot" && (
        <div className="flex justify-center items-end h-[10%] relative w-full gap-4">
          <h2>{`${player}'s Deck`}</h2>
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
            showStats={showStats}
          />
        ))}
        <button
          type="button"
          className={position === "top" ? buttonTop : buttonBottom}
          onClick={() => setShowStats(!showStats)}
        >
          <img
            src={position === "top" ? nestedCondTop : nestedCondBottom}
            alt=""
          />
        </button>
      </div>
      {position === "top" && (
        <h2 className="flex justify-center items-start h-[10%]">{`${player}'s Deck`}</h2>
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
