import React, { useState } from "react";
import PropTypes from "prop-types";
import MiniCardHover from "./MiniCardHover";
import { cardPropTypes } from "../cardPropTypes";

export default function MiniCard({
  dataDeck,
  selectCardToPlay,
  validPlayerSelection,
  position,
  showStats,
}) {
  const [showStatsHover, setShowStatsHover] = useState(false);
  const {
    image: { url },
  } = dataDeck;
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div
        className="border-[#54EB75] border-solid border-2 h-auto max-w-[90px] rounded-[10%] relative minicard"
        onMouseEnter={() => setShowStatsHover((prev) => !prev)}
        onMouseLeave={() => setShowStatsHover((prev) => !prev)}
      >
        {(showStats || showStatsHover) && (
          <MiniCardHover dataDeck={dataDeck} position={position} />
        )}
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
  showStats: PropTypes.bool.isRequired,
};
