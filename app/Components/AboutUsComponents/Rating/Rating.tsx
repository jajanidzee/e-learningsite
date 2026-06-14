import React from "react";
import RatingBtns from "../RatingBtns/RatingBtns";

const Rating = () => {
  return (
    <div className="mt-[55px]">
      <div>
        <div className="flex gap-[50px]">
          <RatingBtns btnclass="" btntext="Overview" />
          <RatingBtns btnclass="" btntext="Overview" />
          <RatingBtns btnclass="" btntext="Overview" />
          <RatingBtns btnclass="" btntext="Overview" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Rating;
