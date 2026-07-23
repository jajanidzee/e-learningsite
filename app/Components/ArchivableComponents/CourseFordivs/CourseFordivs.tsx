import React from "react";
type Props = {
  maindiv: any;
  maintext: string;
  bio: string;
};
const CourseFordivs = ({ maindiv, maintext, bio }: Props) => {
  return (
    <div className={`${maindiv}`}>
      <h4 className="font-[Poppins] font-semibold text-[30px] text-[#252641]">
        {maintext}
      </h4>
      <p className="mt-[30px] font-[Poppins] font-normal text-[24px] text-[#696984] ">
        {bio}
      </p>
    </div>
  );
};

export default CourseFordivs;
