import React from "react";
type Props = {
  text: string;
};
const Numbers = ({ text }: Props) => {
  return (
    <div className="cursor-pointer w-[70px] flex items-center justify-center hover:bg-[#49BBBD] hover:text-[#fff]">
      <p className="font-[Poppins] text-[30px] text-[#000] font-normal">
        {text}
      </p>
    </div>
  );
};

export default Numbers;
