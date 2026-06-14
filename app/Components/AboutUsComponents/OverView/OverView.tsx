import React from "react";
import OverViewImg from "../../../../public/OverView.png";
import Image from "next/image";
const OverView = () => {
  return (
    <div>
      <Image src={OverViewImg} alt="OverViewImg"></Image>
    </div>
  );
};

export default OverView;
