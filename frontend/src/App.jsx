import "./App.css";
import React, { useState } from "react";
import DraftPage from "./components/Draft/DraftPage";
import HomePage from "./components/Homepage/Homepage";
import CombatMode from "./components/Combat/CombatMode";

export default function App() {
  const [activePage, setActivePage] = useState("homepage");
  const [draftRound, setDraftRound] = useState(1);
  const [playerOneDeck, setPlayerOneDeck] = useState([]);
  const [playerTwoDeck, setPlayerTwoDeck] = useState([]);
  const play = () => {
    setActivePage("draftPage");
  };
  return (
    <div className="App">
      {activePage === "homepage" && <HomePage play={play} />}
      {activePage === "draftPage" && (
        <DraftPage
          draftRound={draftRound}
          setDraftRound={setDraftRound}
          playerOneDeck={playerOneDeck}
          setPlayerOneDeck={setPlayerOneDeck}
          playerTwoDeck={playerTwoDeck}
          setPlayerTwoDeck={setPlayerTwoDeck}
          setActivePage={setActivePage}
        />
      )}
      {activePage === "combatpage" && (
        <CombatMode
          playerOneDeck={playerOneDeck}
          setPlayerOneDeck={setPlayerOneDeck}
          playerTwoDeck={playerTwoDeck}
          setPlayerTwoDeck={setPlayerTwoDeck}
        />
      )}
    </div>
  );
}
