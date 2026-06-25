import React from "react";
type Props = {
  priceclass: any;
  mainclass: any;
  main: string;
  price: string;
};
const Subtotal = ({ main, price, priceclass, mainclass }: Props) => {
  return (
    <div className="flex justify-between">
      <p
        className={`${mainclass} text-[20px] text-[#5B5B5B] font-[Poppins] font-semibold`}
      >
        {main}
      </p>
      <p
        className={`${priceclass} text-[20px] text-[#5B5B5B] font-[Poppins] font-semibold`}
      >
        {price}
      </p>
    </div>
  );
};

export default Subtotal;
