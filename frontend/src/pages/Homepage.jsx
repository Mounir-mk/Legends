import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Homepage/Navbar";

function HomePage({ play, player1, setPlayer1, player2, setPlayer2 }) {
  return (
    <div className="h-screen w-screen flex flex-col justify-evenly items-center text-yellow-500">
      <h1 className="text-2xl text-white">LEGENDS</h1>
      <Navbar />
      <section id="bottom-section" className="flex w-1/2 justify-evenly">
        <input
          type="text"
          placeholder="Player 1"
          className="bg-black rounded-full border border-green-700 text-center text-[#54EB75]"
          value={player1}
          onChange={(event) => setPlayer1(event.target.value)}
        />
        <button
          type="button"
          className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 active:bg-green-50 focus:bg-green-500"
          onClick={play}
        >
          PLAY
        </button>
        <input
          type="text"
          placeholder="Player 2"
          className="bg-black rounded-full border border-green-700 text-center text-[#54EB75]"
          value={player2}
          onChange={(event) => setPlayer2(event.target.value)}
        />
      </section>
    </div>
  );
}
HomePage.propTypes = {
  play: PropTypes.func.isRequired,
  player1: PropTypes.string.isRequired,
  setPlayer1: PropTypes.func.isRequired,
  player2: PropTypes.string.isRequired,
  setPlayer2: PropTypes.func.isRequired,
};
export default HomePage;
