import React, { useState } from "react";
import PropTypes from "prop-types";
import WinnerPage from "./WinnerPage";
import CombatMode from "../components/Combat/CombatMode";
import { cardArrayPropTypes } from "../components/cardPropTypes";

export default function CombatPage({
  playerOneDeck,
  setPlayerOneDeck,
  playerTwoDeck,
  setPlayerTwoDeck,
  setActivePage,
  setDraftRound,
  player1,
  player2,
}) {
  const [winner, setWinner] = useState(null);

  return (
    <div>
      {winner ? (
        <WinnerPage
          winner={winner}
          setActivePage={setActivePage}
          setPlayerOneDeck={setPlayerOneDeck}
          setPlayerTwoDeck={setPlayerTwoDeck}
        />
      ) : (
        <CombatMode
          setDraftRound={setDraftRound}
          playerOneDeck={playerOneDeck}
          setPlayerOneDeck={setPlayerOneDeck}
          playerTwoDeck={playerTwoDeck}
          setPlayerTwoDeck={setPlayerTwoDeck}
          setWinner={setWinner}
          player1={player1}
          player2={player2}
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
  player1: PropTypes.string.isRequired,
  player2: PropTypes.string.isRequired,
};
