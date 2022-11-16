import React, { useState } from "react";
import PropTypes from "prop-types";
import WinnerPage from "./WinnerPage";
import CombatMode from "./CombatMode";

export default function CombatPage({
  playerOneDeck,
  setPlayerOneDeck,
  playerTwoDeck,
  setPlayerTwoDeck,
  setActivePage,
  setDraftRound,
}) {
  const [winner, setWinner] = useState(null);

  return (
    <div>
      {winner ? (
        <WinnerPage winner={winner} setActivePage={setActivePage} />
      ) : (
        <CombatMode
          setDraftRound={setDraftRound}
          playerOneDeck={playerOneDeck}
          setPlayerOneDeck={setPlayerOneDeck}
          playerTwoDeck={playerTwoDeck}
          setPlayerTwoDeck={setPlayerTwoDeck}
          setWinner={setWinner}
        />
      )}
    </div>
  );
}

CombatPage.propTypes = {
  playerOneDeck: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      powerstats: PropTypes.shape({
        intelligence: PropTypes.string,
        strength: PropTypes.string,
        speed: PropTypes.string,
        durability: PropTypes.string,
        power: PropTypes.string,
        combat: PropTypes.string,
      }),
      image: PropTypes.PropTypes.shape({ url: PropTypes.string }),
    })
  ).isRequired,
  playerTwoDeck: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      powerstats: PropTypes.shape({
        intelligence: PropTypes.string,
        strength: PropTypes.string,
        speed: PropTypes.string,
        durability: PropTypes.string,
        power: PropTypes.string,
        combat: PropTypes.string,
      }),
      image: PropTypes.PropTypes.shape({ url: PropTypes.string }),
    })
  ).isRequired,
  setPlayerOneDeck: PropTypes.func.isRequired,
  setPlayerTwoDeck: PropTypes.func.isRequired,
  setActivePage: PropTypes.func.isRequired,
  setDraftRound: PropTypes.func.isRequired,
};
