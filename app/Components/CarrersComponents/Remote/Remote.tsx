import React from "react";
import RemoteDivs from "../RemoteDivs/RemoteDivs";

const Remote = () => {
  return (
    <div className="mt-[77px] ml-[142px]">
      <h3 className="font-[Poppins] font-semibold text-[36px] text-[#2D3436] text-center">
        Online coaching lessons for remote learning
      </h3>
      <RemoteDivs mainp="Business Growth Starts Today" divclass="" ptext="" />
      <RemoteDivs mainp="Coaching For Lasting Success" divclass="" ptext="" />
      <RemoteDivs
        mainp="Empowering Leaders Driving Results"
        divclass=""
        ptext=""
      />
      <RemoteDivs
        mainp="Strategic Coaching Real Results"
        divclass=""
        ptext="Business coaching helps entrepreneurs, managers, and teams unlock their full potential through strategic guidance and practical solutions. By focusing on leadership development, goal setting, productivity, and decision-making, coaching creates a clear path toward long-term success."
      />
      <RemoteDivs mainp="Business Growth Starts Today" divclass="" ptext="" />
    </div>
  );
};

export default Remote;
