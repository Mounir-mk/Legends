import React from "react";

function InfoTab() {
  return (
    <>
      <h3 className="w-screen text-center text-[#54EB75] h-1/6">
        {"info".toUpperCase()}
      </h3>

      <iframe
        className="max-w-full"
        src="https://www.youtube.com/embed/hOT3Gw3hbwg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </>
  );
}

export default InfoTab;
