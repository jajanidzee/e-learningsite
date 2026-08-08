import React from "react";
import RatingBtns from "../../AboutUsComponents/RatingBtns/RatingBtns";

const Sellection = () => {
  return (
    <div className="flex gap-[25.84px] items-center ml-[160px] mt-[68px]">
      <RatingBtns btnclass="" btntext="About" />{" "}
      <RatingBtns btnclass="" btntext="Course" />{" "}
      <RatingBtns btnclass="" btntext="Notes" />{" "}
      <RatingBtns btnclass="" btntext="Project" />{" "}
      <RatingBtns btnclass="" btntext="Podcast" />{" "}
      <RatingBtns btnclass="" btntext="Book" />{" "}
      <RatingBtns btnclass="" btntext="Review" />
    </div>
  );
};

export default Sellection;
