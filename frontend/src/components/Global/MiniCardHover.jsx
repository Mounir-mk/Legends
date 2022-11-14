import React from "react";
import PropTypes from "prop-types";

function MiniCardHover({ dataDeck, position }) {
  const {
    powerstats: { intelligence, strength, speed, durability, power, combat },
  } = dataDeck;
  return (
    <>
      {position === "bot" && (
        <div className="bg-black z-1000 absolute -top-[110%] w-full grid grid-cols-2 rounded-lg text-center">
          <h3>{intelligence}</h3>
          <h3>{strength}</h3>
          <h3>{speed}</h3>
          <h3>{durability}</h3>
          <h3>{power}</h3>
          <h3>{combat}</h3>
        </div>
      )}
      {position === "top" && (
        <div className="bg-black z-1000 absolute -bottom-[110%] w-full grid grid-cols-2 rounded-lg text-center">
          <h3>{intelligence}</h3>
          <h3>{strength}</h3>
          <h3>{speed}</h3>
          <h3>{durability}</h3>
          <h3>{power}</h3>
          <h3>{combat}</h3>
        </div>
      )}
    </>
  );
}

MiniCardHover.propTypes = {
  dataDeck: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        powerstats: PropTypes.objectOf(
          PropTypes.shape({
            intelligence: PropTypes.number,
            strength: PropTypes.number,
            speed: PropTypes.number,
            durability: PropTypes.number,
            power: PropTypes.number,
            combat: PropTypes.number,
          })
        ),
      })
    )
  ).isRequired,
  position: PropTypes.string.isRequired,
};

export default MiniCardHover;
