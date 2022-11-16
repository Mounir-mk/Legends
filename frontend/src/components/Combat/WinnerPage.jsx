import React from "react";
import PropTypes from "prop-types";

function WinnerPage({ winner, setActivePage }) {
  return (
    <section className="h-screen flex flex-col items-center text-yellow-700 justify-around">
      <h1>WinnerPage</h1>
      <h2>Winner is : {winner}</h2>
      <button
        type="button"
        className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 active:bg-green-50 focus:bg-green-500"
        onClick={() => setActivePage("homepage")}
      >
        Replay
      </button>
    </section>
  );
}

WinnerPage.propTypes = {
  winner: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired,
};

export default WinnerPage;
