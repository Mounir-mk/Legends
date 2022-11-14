import React from "react";
import PropTypes from "prop-types";
import {
  Card as MTCard,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function Card({ character, select }) {
  const {
    name,
    image: { url },
    powerstats: { intelligence, strength, speed, durability, power, combat },
  } = character;

  return (
    <div
      className="flex justify-center box-content"
      onClick={select}
      onKeyUp={select}
      aria-hidden="true"
    >
      <MTCard className="w-48 h-80 bg-black m-4 relatives border-2 border-black border-solid ">
        <CardHeader floated={false} className="-m-0">
          <img className="" src={url} alt={name} />
        </CardHeader>
        <CardBody className="text-center p-0">
          <Typography
            variant="h4"
            color="blue-gray "
            className="mb-2  text-yellow-500"
          >
            {name}
          </Typography>
          <Typography className="grid grid-cols-2" textGradient>
            <div className="flex flex-col justify-center items-center absolute top-[0%] -left-4 shadow-lg bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 w-12 h-16 -translate-y-2/4    ">
              <div className="text-yellow-600">INT</div>
              <div className="text-white ">{intelligence}</div>
            </div>
            <div className="flex flex-col justify-center items-center absolute top-[38%] -left-4 shadow-lg bg-black p-0.05 rounded-xl border-red-400 border-solid -translate-y-2/4 border-2 w-12 h-16">
              <div className="text-white ">
                <div className="text-yellow-600">POW</div>
                {power}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center absolute top-[70%] -left-4 shadow-lg bg-black p-0.05 rounded-xl border-red-400 border-solid -translate-y-2/4 border-2 w-12 h-16">
              <div className="text-white ">
                <div className="text-yellow-600">DUR</div>
                {durability}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center absolute top-[0%] -right-4 bg-black p-0.05 rounded-xl border-red-400 border-solid border-2  -translate-y-2/4 h-16 w-12">
              <div className="text-white ">
                <div className="text-yellow-600">STR</div>
                {strength}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center absolute top-[38%] -right-4 bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 -translate-y-2/4 h-16 w-12">
              <div className="text-white ">
                <div className="text-yellow-600">SPD</div>
                {speed}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center absolute top-[70%] -right-4 bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 -translate-y-2/4 h-16 w-12">
              <div className="text-white ">
                <div className="text-yellow-600">CBT</div>
                {combat}
              </div>
            </div>
          </Typography>
        </CardBody>
      </MTCard>
    </div>
  );
}

Card.propTypes = {
  character: PropTypes.objectOf(PropTypes.string).isRequired,
  select: PropTypes.func.isRequired,
};
