import React from "react";
import { cardPropTypes } from "../cardPropTypes";

function MiniCardHover({ dataDeck }) {
  const listStats = Object.entries(dataDeck.powerstats);

  return (
    <>
      {listStats.map((stat) => {
        return <h3 key={stat[0]}>{stat[1]}</h3>;
      })}
    </>
  );
}

MiniCardHover.propTypes = {
  dataDeck: cardPropTypes.isRequired,
};

export default MiniCardHover;
