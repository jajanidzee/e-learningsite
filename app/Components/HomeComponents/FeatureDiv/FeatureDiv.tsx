import Image, { StaticImageData } from "next/image";

type Props = {
  imagee: StaticImageData;
  ptext: string;
  pclass: any;
  divclass: any;
};
const FeatureDiv = ({ imagee, ptext, pclass, divclass }: Props) => {
  return (
    <div className={`${divclass}flex items-center gap-[42px] mb-[40px]`}>
      <div className="w-[60px] flex justify-center items-center h-[60px] bg-[#FBFBFB] rounded-[100%] shadow-[0px_5px_10px_0px_grey]">
        {" "}
        <Image src={imagee} alt="imagee"></Image>
      </div>
      <p
        className={`${pclass} w-[410px] font-normal text-[22px] text-[#696984] text-start font-[Poppins] `}
      >
        {ptext}
      </p>
    </div>
  );
};

export default FeatureDiv;
