import React from "react";
import SampleCard from "./SampleCard";

function CardsTab() {
  return (
    <div className="w-screen flex flex-col justify-between items-center min-h-96">
      <h3 className="w-screen text-center text-[#54EB75]">
        {"cards".toUpperCase()}
      </h3>
      <div>
        <SampleCard />
      </div>
    </div>
  );
}

export default CardsTab;
