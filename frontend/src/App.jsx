import "./App.css";
import React, { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import { useAutoAnimate } from "@formkit/auto-animate/react";
import DraftPage from "./pages/DraftPage";
import HomePage from "./pages/Homepage";
import CombatPage from "./pages/CombatPage";

export default function App() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [activePage, setActivePage] = useState("homepage");
  const [draftRound, setDraftRound] = useState(1);
  const [playerOneDeck, setPlayerOneDeck] = useState([]);
  const [playerTwoDeck, setPlayerTwoDeck] = useState([]);
  const [parent] = useAutoAnimate();
  const play = () => {
    setActivePage("draftPage");
  };
  return (
    <div ref={parent} className="App">
      {activePage === "homepage" && (
        <HomePage
          play={play}
          player1={player1}
          player2={player2}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
        />
      )}
      {activePage === "draftPage" && (
        <DraftPage
          draftRound={draftRound}
          setDraftRound={setDraftRound}
          playerOneDeck={playerOneDeck}
          setPlayerOneDeck={setPlayerOneDeck}
          playerTwoDeck={playerTwoDeck}
          setPlayerTwoDeck={setPlayerTwoDeck}
          setActivePage={setActivePage}
          player1={player1}
          player2={player2}
        />
      )}
      {activePage === "combatpage" && (
        <CombatPage
          playerOneDeck={playerOneDeck}
          setPlayerOneDeck={setPlayerOneDeck}
          playerTwoDeck={playerTwoDeck}
          setPlayerTwoDeck={setPlayerTwoDeck}
          setActivePage={setActivePage}
          setDraftRound={setDraftRound}
          player1={player1}
          player2={player2}
        />
      )}
    </div>
  );
}
