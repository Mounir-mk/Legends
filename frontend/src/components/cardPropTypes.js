import PropTypes from "prop-types";

const cardPropTypes = PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    powerstats: PropTypes.shape({
        intelligence: PropTypes.string,
        strength: PropTypes.string,
        speed: PropTypes.string,
        durability: PropTypes.string,
        power: PropTypes.string,
        combat: PropTypes.string,
    }),
    image: PropTypes.PropTypes.shape({ url: PropTypes.string }),
});

const cardArrayPropTypes = PropTypes.arrayOf(cardPropTypes);

export { cardPropTypes, cardArrayPropTypes };
