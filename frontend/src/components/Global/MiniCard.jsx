import React from "react";
import PropTypes from "prop-types";
import MiniCardHover from "./MiniCardHover";
import "./MiniCard.css";
import { cardPropTypes } from "../cardPropTypes";

export default function MiniCard({
  dataDeck,
  selectCardToPlay,
  validPlayerSelection,
  position,
}) {
  const [showHover, setShowHover] = React.useState(false);
  const {
    image: { url },
  } = dataDeck;
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div
        className="border-brown-200 border-solid border-4 h-auto max-w-[90px] rounded-[10%] relative minicard"
        onMouseEnter={() => setShowHover(!showHover)}
        onMouseLeave={() => setShowHover(!showHover)}
      >
        {showHover && <MiniCardHover dataDeck={dataDeck} position={position} />}
        <img
          className="w-full h-full rounded-[10%]"
          src={url}
          alt=""
          aria-hidden="true"
          onClick={() => validPlayerSelection === false && selectCardToPlay()}
        />
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
