import React, { useState } from "react";
import PropTypes from "prop-types";
import MiniCardHover from "./MiniCardHover";
import "./MiniCard.css";
import { cardPropTypes } from "../cardPropTypes";
import up from "../../assets/up.png";
import down from "../../assets/down.png";

export default function MiniCard({
  dataDeck,
  selectCardToPlay,
  validPlayerSelection,
  position,
}) {
  const [showHover, setShowHover] = useState(false);
  const style =
    "button-style absolute bg-black text-white h-6 w-6 flex justify-center items-center";
  const buttonTop = `${style} bottom-0 left-1/2 transform -translate-x-1/2  `;
  const buttonBottom = `${style} top-0 left-1/2 transform -translate-x-1/2`;
  const nestedCondTop = showHover ? up : down;
  const nestedCondBottom = showHover ? down : up;
  const {
    image: { url },
  } = dataDeck;
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div
        className="border-brown-200 border-solid border-4 h-auto max-w-[90px] rounded-[10%] relative minicard"
        onMouseEnter={() => setShowHover((prev) => !prev)}
        onMouseLeave={() => setShowHover((prev) => !prev)}
      >
        {showHover && <MiniCardHover dataDeck={dataDeck} position={position} />}
        <img
          className="w-full h-full rounded-[10%]"
          src={url}
          alt=""
          aria-hidden="true"
          onClick={() => validPlayerSelection === false && selectCardToPlay()}
        />
        <button
          type="button"
          className={position === "top" ? buttonTop : buttonBottom}
          onClick={() => setShowHover(!showHover)}
        >
          <img
            src={position === "top" ? nestedCondTop : nestedCondBottom}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

MiniCard.propTypes = {
  dataDeck: cardPropTypes.isRequired,
  selectCardToPlay: PropTypes.func.isRequired,
  validPlayerSelection: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
};
