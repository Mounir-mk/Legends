import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
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
  const [parent] = useAutoAnimate();
  const [showStatsHover, setShowStatsHover] = useState(false);
  const {
    image: { url },
  } = dataDeck;
  const container =
    "bg-black z-20 absolute w-full grid grid-cols-2 rounded-lg text-center text-[#54EB75]";
  return (
    <div className="h-full w-full flex items-center justify-center">
      <button
        type="button"
        className="rounded-[10%]"
        onClick={() => !validPlayerSelection && selectCardToPlay()}
      >
        <figure
          className="border-[#54EB75] border-solid border-2 h-auto max-w-[90px] rounded-[10%] relative minicard"
          onMouseEnter={() => setShowStatsHover((prev) => !prev)}
          onMouseLeave={() => setShowStatsHover((prev) => !prev)}
        >
          <img src={url} className="rounded-[10%]" alt="MiniCard" />
          <div
            ref={parent}
            className={`
        ${container} 
        ${position === "bot" && "bottom-[110%]"}
        ${position === "top" && "top-[110%]"}`}
          >
            {(showStats || showStatsHover) && (
              <MiniCardHover dataDeck={dataDeck} position={position} />
            )}
          </div>
        </figure>
      </button>
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
