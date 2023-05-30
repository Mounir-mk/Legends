import React from "react";
import Card from "../Global/Card";

function CardsTab() {
  const sampleCardData = {
    name: "Batman",
    powerstats: {
      intelligence: "?",
      strength: "?",
      speed: "?",
      durability: "?",
      power: "?",
      combat: "?",
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
    },
  };
  return (
    <>
      <h3 className="w-screen text-center text-[#54EB75]">
        {"cards".toUpperCase()}
      </h3>
      <Card character={sampleCardData} cardsTab />
    </>
  );
}

export default CardsTab;
