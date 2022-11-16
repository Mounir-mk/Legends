import React, { useState } from "react";
import PropTypes from "prop-types";
import WinnerPage from "./WinnerPage";
import CombatMode from "./CombatMode";
import { cardArrayPropTypes } from "../cardPropTypes";

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
  playerOneDeck: cardArrayPropTypes.isRequired,
  playerTwoDeck: cardArrayPropTypes.isRequired,
  setPlayerOneDeck: PropTypes.func.isRequired,
  setPlayerTwoDeck: PropTypes.func.isRequired,
  setActivePage: PropTypes.func.isRequired,
  setDraftRound: PropTypes.func.isRequired,
};
