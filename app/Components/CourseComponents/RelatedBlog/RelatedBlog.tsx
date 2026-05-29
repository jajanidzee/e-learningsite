import React from "react";
import RelatedBlogDivs from "../RelatedBlogDivs/RelatedBlogDivs";
import LinaImg from "../../../../public/Lina.png";
import LinaPfpImg from "../../../../public/LinaPfp.png";
import GroupChatImg from "../../../../public/GroupChat.png";
import LeftArrowImg from "../../../../public/LeftArrow.svg";
import RightArrowImg from "../../../../public/RightArrow.svg";
import Image from "next/image";
const RelatedBlog = () => {
  return (
    <div className="bg-[#9dccff73] pl-[116px] pt-[93px] pr-[132.62px] mt-[80px] pb-[66px]">
      <div className="flex items-center justify-between">
        <p className="font-[Poppins] font-medium text-[30px] text-[#000]">
          Related Blog{" "}
        </p>
        <p className="font-[Poppins] font-bold text-[20px] text-[#49BBBD]">
          See all
        </p>
      </div>
      <div className="mt-[41px] flex gap-[99px]">
        <RelatedBlogDivs
          imagee={LinaImg}
          ptext="Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution"
          redactorimg={LinaPfpImg}
          rdcname="Lina"
          biotext="Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
          seentext="251,232"
        />
        <RelatedBlogDivs
          imagee={GroupChatImg}
          ptext="Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution"
          redactorimg={LinaPfpImg}
          rdcname="Lina"
          biotext="Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
          seentext="300,101"
        />
      </div>
      <div className="flex gap-[20px] justify-end mt-[73px]">
        <button className="w-[50px] h-[50px] bg-[#49bbbda0] rounded-[4px] text-[#fff] text-[24px] flex items-center justify-center">
          <Image src={LeftArrowImg} alt="LeftArrowImg"></Image>
        </button>
        <button className="w-[50px] h-[50px] bg-[#49BBBD] rounded-[4px] text-[#fff] text-[24px] flex items-center justify-center">
          <Image src={RightArrowImg} alt="RightArrowImg"></Image>
        </button>
      </div>
    </div>
  );
};

export default RelatedBlog;
