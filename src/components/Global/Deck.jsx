import React, { useState } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-unresolved
import { useAutoAnimate } from "@formkit/auto-animate/react";
import MiniCard from "./MiniCard";
import { cardArrayPropTypes } from "../cardPropTypes";
import up from "../../assets/up.png";
import down from "../../assets/down.png";
import "./Deck.css";

function Deck({
  deck,
  position,
  setPlayerCardPicked,
  validPlayerSelection,
  setPlayerDeck,
  player,
  setValidPlayerSelection,
}) {
  const [parent] = useAutoAnimate();
  const [showStats, setShowStats] = useState(false);
  const style =
    deck.length === 0
      ? "hidden"
      : "button-style absolute bg-green-500 text-white h-16 flex justify-center items-center rounded-lg w-8";
  const buttonTop = `${style} top-full right-0`;
  const buttonBottom = `${style} bottom-full left-4 transform -translate-x-1/2`;
  const nestedCondTop = showStats ? up : down;
  const nestedCondBottom = showStats ? down : up;
  return (
    <>
      {position === "bot" && (
        <h2 className="flex justify-center items-end h-[10%] w-full text-[#54EB75]">{`${player}'s Deck`}</h2>
      )}

      <div ref={parent} className="grid grid-cols-6 h-[90%] w-full relative">
        {deck.map((deckCard) => (
          <MiniCard
            dataDeck={deckCard}
            key={deckCard.id}
            position={position}
            selectCardToPlay={() => {
              setValidPlayerSelection(!validPlayerSelection);
              setPlayerCardPicked(deckCard);
              setPlayerDeck((prev) =>
                prev.filter((card) => card.id !== deckCard.id)
              );
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
        <h2 className="flex justify-center items-start h-[10%] text-[#54EB75]">{`${player}'s Deck`}</h2>
      )}
    </>
  );
}

Deck.propTypes = {
  deck: cardArrayPropTypes.isRequired,
  position: PropTypes.string.isRequired,
  setPlayerCardPicked: PropTypes.func,
  validPlayerSelection: PropTypes.bool,
  player: PropTypes.string.isRequired,
  setValidPlayerSelection: PropTypes.func,
  setPlayerDeck: PropTypes.func,
};

Deck.defaultProps = {
  setPlayerCardPicked: null,
  validPlayerSelection: false,
  setValidPlayerSelection: null,
  setPlayerDeck: null,
};

export default Deck;
