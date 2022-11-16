import React from "react";
import PropTypes from "prop-types";
import Card from "../Global/Card";

function Player({ score, playerCardPicked, setValidPlayerSelection }) {
  return (
    <div>
      <h1 className="text-yellow-700 text-xl text-center">
        Player Two Score : {score}
      </h1>
      {playerCardPicked !== null && (
        <div className="flex flex-col justify-center items-center">
          <Card character={playerCardPicked} />
          <button
            type="button"
            className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 active:bg-green-50 focus:bg-green-500"
            onClick={() => setValidPlayerSelection(true)}
          >
            Valid Selection
          </button>
        </div>
      )}
    </div>
  );
}

Player.propTypes = {
  score: PropTypes.number.isRequired,
  playerCardPicked: PropTypes.shape({
    name: PropTypes.string,
    powerstats: PropTypes.shape({
      intelligence: PropTypes.string,
      strength: PropTypes.string,
      speed: PropTypes.string,
      durability: PropTypes.string,
      power: PropTypes.string,
      combat: PropTypes.string,
    }),
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  setValidPlayerSelection: PropTypes.func.isRequired,
};

export default Player;
