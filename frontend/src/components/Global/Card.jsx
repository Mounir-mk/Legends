import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import { cardPropTypes } from "../cardPropTypes";

export default function Card({ character, select, cardsTab }) {
  const {
    name,
    image: { url },
  } = character;
  const listStats = Object.entries(character.powerstats);
  const style =
    "flex flex-col justify-center items-center shadow-lg bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 w-12 h-12 z-10 ";

  return (
    <button type="button" onClick={select}>
      <figure
        className={`flex flex-col bg-clip-border rounded-xl shadow-md bg-black relative border-2 border-black border-solid ${
          cardsTab ? "w-30 h-56" : "w-48 h-80 card"
        }`}
      >
        <figcaption className="relative bg-clip-border rounded-xl shadow-lg">
          <img className={cardsTab && "h-44"} src={url} alt={name} />
          <figcaption className="block antialiased font-sans text-base font-light leading-relaxed text-inherit">
            <dl>
              {listStats.map((stat) => {
                const statName = stat[0];
                const statValue = stat[1];
                const statNameShort = statName.slice(0, 3).toUpperCase();
                return (
                  <dt
                    className={`
                  ${style} 
                  ${statName === "intelligence" && "absolute top-[0%]"}
                  ${
                    statName === "power" &&
                    "absolute top-[50%] -translate-y-1/2"
                  }
                  ${statName === "durability" && "absolute bottom-[0%]"}
                  ${statName === "strength" && "absolute top-[0%] right-0"}
                  ${
                    statName === "speed" &&
                    "absolute top-[50%] right-0 -translate-y-1/2"
                  }
                  ${statName === "combat" && "absolute bottom-[0%] right-0"}`}
                  >
                    <div className="text-[#54EB75]">
                      {statNameShort === "SPE" ? "SPD" : statNameShort}
                    </div>
                    <div className="text-white ">{statValue}</div>
                  </dt>
                );
              })}
            </dl>
          </figcaption>
        </figcaption>
        <h1 className="block font-sans text-2xl font-semibold leading-snug mb-2 text-[#54EB75] text-center">
          {name}
        </h1>
      </figure>
    </button>
  );
}

Card.propTypes = {
  character: cardPropTypes.isRequired,
  select: PropTypes.func.isRequired,
  cardsTab: PropTypes.bool.isRequired,
};
