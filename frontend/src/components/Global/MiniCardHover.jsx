import React from "react";
import PropTypes from "prop-types";
import { cardPropTypes } from "../cardPropTypes";

function MiniCardHover({ dataDeck, position }) {
  const listStats = Object.entries(dataDeck.powerstats);
  const container =
    "bg-black z-20 absolute w-full grid grid-cols-2 rounded-lg text-center text-[#54EB75]";
  return (
    <div
      className={`
        ${container} 
        ${position === "bot" && "bottom-[110%]"}
        ${position === "top" && "top-[110%]"}`}
    >
      {listStats.map((stat) => {
        return <h3>{stat[1]}</h3>;
      })}
    </div>
  );
}

MiniCardHover.propTypes = {
  dataDeck: cardPropTypes.isRequired,
  position: PropTypes.string.isRequired,
};

export default MiniCardHover;
