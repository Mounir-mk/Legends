import React from "react";

function InfoTab() {
  return (
    <div className="w-screen h-1/3 flex flex-col justify-between items-center">
      <h3 className="w-screen text-center text-[#54EB75]">
        {"info".toUpperCase()}
      </h3>
      <p className="w-2/3 text-center text-white">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
      </p>
    </div>
  );
}

export default InfoTab;
