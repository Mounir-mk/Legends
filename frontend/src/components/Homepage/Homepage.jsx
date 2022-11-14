import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

function HomePage({ play }) {
  return (
    <div className="h-screen w-screen flex flex-col justify-evenly items-center text-yellow-500">
      <h1 className="text-2xl text-white">LEGENDS</h1>
      <Navbar />
      <button
        type="button"
        className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 active:bg-green-50 focus:bg-green-500"
        onClick={play}
      >
        PLAY
      </button>
    </div>
  );
}
HomePage.propTypes = {
  play: PropTypes.func.isRequired,
};
export default HomePage;
