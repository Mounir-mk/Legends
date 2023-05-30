import React from "react";
import PropTypes from "prop-types";

function WinnerPage({
  winner,
  setActivePage,
  setPlayerOneDeck,
  setPlayerTwoDeck,
}) {
  const handleReset = () => {
    setActivePage("homepage");
    setPlayerOneDeck([]);
    setPlayerTwoDeck([]);
  };
  return (
    <main className="h-screen flex flex-col items-center text-green-400 justify-around">
      {winner === "draw" ? (
        <h1 className="text-6xl">It's a draw!</h1>
      ) : (
        <>
          <h1 className="text-4xl text-center">The winner is</h1>
          <h2 className="text-6xl text-center animate-ping ">{winner}</h2>
          <h3 className="text-2xl animate-bounce ">Congratulations !</h3>
        </>
      )}
      <div className="flex items-center justify-center">
        <button
          type="button"
          className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 active:bg-green-50 focus:bg-green-500"
          onClick={() => handleReset()}
        >
          Home
        </button>
        <button
          type="button"
          className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 active:bg-green-50 focus:bg-green-500"
          onClick={() => {
            setActivePage("draftPage");
            setPlayerOneDeck([]);
            setPlayerTwoDeck([]);
          }}
        >
          Replay
        </button>
      </div>
    </main>
  );
}

WinnerPage.propTypes = {
  winner: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired,
  setPlayerOneDeck: PropTypes.func.isRequired,
  setPlayerTwoDeck: PropTypes.func.isRequired,
};

export default WinnerPage;
