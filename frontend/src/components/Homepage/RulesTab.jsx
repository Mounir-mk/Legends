import React from "react";

function RulesTab() {
  return (
    <div className="w-screen h-1/3 flex flex-col justify-between items-center">
      <h3 className="w-screen text-center text-[#54EB75]">
        {"règles".toUpperCase()}
      </h3>
      <p className="w-5/6 text-center text-white overflow-y-auto">
        Début de partie : DRAFT PICK : Le 1er joueur à commencer le draft est
        tiré au sort Le jeu propose 3 cartes, le 1er joueur pourra choisir la
        PREMIERE carte, les deux restantes iront directement dans le deck du
        2éme joueur. (Le draft continue alors jusqu'à ce que chaque joueur aient
        6 cartes). La partie commence : Une stat est choisi aléatoirement par le
        jeu et annoncé au début de la partie Chaque joueur choisit son héros
        pour le placer sur le board, si la force des héros est équivalente une
        autre stat est choisi par le jeu et celle ci sera prise en compte pour
        la victoire la carte du joueur victorieux reste sur le board. La partie
        se termine quand un des joueurs n’a plus de cartes. Le joueur peut
        choisir quel stats supprimer à l'adversaire et vice-versa
      </p>
    </div>
  );
}

export default RulesTab;
