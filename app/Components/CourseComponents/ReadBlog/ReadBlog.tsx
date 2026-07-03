import React from "react";
import ReadBlogDivs from "../ReadBlogDivs/ReadBlogDivs";
import UxImg from "../../../../public/UX.png";
import ReactImg from "../../../../public/React.png";
import PHPImg from "../../../../public/PHP.png";
import JavaScriptImg from "../../../../public/JavaScript.png";
const ReadBlog = () => {
  return (
    <div className="pt-[80px] pl-[120px] mb-[80px]">
      <h4 className="font-[Poppins] font-bold text-[30px] text-[#000]">
        Reading blog list
      </h4>
      <div className="flex gap-[76px] mt-[26px]">
        {" "}
        <ReadBlogDivs imagee={UxImg} ptext="UX/UI" />
        <ReadBlogDivs imagee={ReactImg} ptext="React" />
        <ReadBlogDivs imagee={PHPImg} ptext="PHP" />
        <ReadBlogDivs imagee={JavaScriptImg} ptext="JavaScript" />
      </div>
    </div>
  );
};

export default ReadBlog;
