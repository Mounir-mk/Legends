import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import CardsTab from "./CardsTab";
import RulesTab from "./RulesTab";
import InfoTab from "./InfoTab";

function Navbar() {
  const navElements = ["Cards", "Rules", "Info"];
  const [tab, setTab] = useState("rules");
  const [parent] = useAutoAnimate();
  return (
    <>
      <nav className="w-screen h-1/6 list-none flex flex-col justify-around items-center">
        <div className="w-1/2 h-0.5 bg-[#54EB75] rounded-sm" />
        <ul className="w-screen list-none flex justify-evenly text-[#54EB75]">
          {navElements.map((element) => (
            <li
              key={element}
              aria-hidden="true"
              onClick={() => setTab(element.toLowerCase())}
              className="hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            >
              {element}
            </li>
          ))}
        </ul>
        <div className="w-1/2 h-0.5 bg-[#54EB75] rounded-sm" />
      </nav>
      <div
        ref={parent}
        className="w-screen flex flex-col justify-between items-center h-1/3"
      >
        {tab === "rules" && <RulesTab />}
        {tab === "cards" && <CardsTab />}
        {tab === "info" && <InfoTab />}
      </div>
    </>
  );
}

export default Navbar;
