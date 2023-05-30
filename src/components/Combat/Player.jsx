import React from "react";
import PropTypes from "prop-types";
import Card from "../Global/Card";
import { cardPropTypes } from "../cardPropTypes";

function Player({ score, playerCardPicked, player, topLeft }) {
  return (
    <div
      className={`flex items-center h-full w-full ${
        topLeft
          ? "justify-start md:justify-center"
          : "justify-end md:justify-center"
      }`}
    >
      <article className="flex flex-col justify-center w-1/2">
        <h1 className="text-[#54EB75] text-xl text-center">
          {player} : {score}
        </h1>
        <section className="text-center w-30 h-44 md:w-48 md:h-80">
          {playerCardPicked !== null && (
            <Card character={playerCardPicked} mobileCombat />
          )}
        </section>
      </article>
    </div>
  );
}

Player.propTypes = {
  score: PropTypes.number.isRequired,
  playerCardPicked: cardPropTypes,
  player: PropTypes.string.isRequired,
  topLeft: PropTypes.bool,
};

Player.defaultProps = {
  playerCardPicked: null,
  topLeft: false,
};

export default Player;
