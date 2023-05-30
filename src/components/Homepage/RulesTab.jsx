import React from "react";

function RulesTab() {
  return (
    <>
      <h3 className="w-screen text-center text-[#54EB75]">
        {"règles".toUpperCase()}
      </h3>
      <section className="w-5/6 overflow-y-auto flex flex-col bg-green-800 rounded-xl md:w-1/2 text-green-300 p-2">
        <p className="text-center">Le jeu se déroule en deux phases :</p>
        <br />
        <p className="text-yellow-500 text-left underline">DRAFT PICK :</p>
        <br />
        Le joueur 1 commence la Draft, le jeu propose 3 cartes, le joueur pourra
        choisir une carte, les deux autres iront directement dans le deck du
        joueur adverse. <br />
        La draft continue alors jusqu'à ce que chaque joueur ait 6 cartes.
        <br />
        <br />
        <p className="text-yellow-500 text-left underline">COMBAT MODE:</p>
        <br />
        Une stat est choisie aléatoirement par le jeu et annoncé au début de la
        partie.
        <br />
        Chaque joueur choisit son héros pour le placer sur le board, si la stat
        est équivalente pour les deux personnages aucun des joueurs ne gagne de
        points autrement le personnage avec la stat dont la valeur est la plus
        élevée donne 1 point au joueur. La partie se termine quand les 2 joueurs
        n’ont plus de cartes.
      </section>
    </>
  );
}

export default RulesTab;
