import React from "react";
import PropTypes from "prop-types";
import "./MiniCard.css";

export default function MiniCard({
  dataDeck,
  selectCardToPlay,
  ValidPlayerTwoSelection,
  ValidPlayerOneSelection,
}) {
  const [showHover, setShowHover] = React.useState(false);
  const image = dataDeck.image.url;
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="border-brown-200 border-solid border-4 h-auto max-w-[90px] rounded-[10%] minicard">
        <img
          className="w-full h-full rounded-[10%]"
          src={image}
          alt=""
          aria-hidden="true"
          onClick={() =>
            (ValidPlayerTwoSelection === false && selectCardToPlay()) ||
            (ValidPlayerOneSelection === false && selectCardToPlay())
          }
          onMouseEnter={() => setShowHover(true)}
          onMouseLeave={() => setShowHover(false)}
        />
      </div>
    </div>
  );
}

MiniCard.propTypes = {
  dataDeck: PropTypes.shape({
    image: PropTypes.shape({ url: PropTypes.string }),
  }).isRequired,
  selectCardToPlay: PropTypes.func.isRequired,
  ValidPlayerTwoSelection: PropTypes.bool.isRequired,
  ValidPlayerOneSelection: PropTypes.bool.isRequired,
};
