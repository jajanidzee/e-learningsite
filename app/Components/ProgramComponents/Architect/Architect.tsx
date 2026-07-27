import React from "react";
import MarketingDivs from "../../CourseComponents/MarketingDivs/MarketingDivs";
import MariaImg from "../../../../public/Maria.jpg";
import CarlImg from "../../../../public/Carl.jpg";
import LinaPfpImg from "../../../../public/LinaPfp.png";
import FearLessImg from "../../../../public/FearLess.png";
import HomeWorkImg from "../../../../public/HomeWork.png";
import KeyBoardImg from "../../../../public/KeyBoard.png";
import DoingWorkImg from "../../../../public/DoingWork.png";
import NoteImg from "../../../../public/Note.png";
import TypingImg from "../../../../public/Typing.png";
import SiteImg from "../../../../public/Site.png";
import HomeLearningImg from "../../../../public/HomeLearning.png";

const Architect = () => {
  return (
    <div className="grid grid-cols-4 inline-grid gap-[62px] ml-[120px] mt-[69px]">
      <MarketingDivs
        mainimagee={FearLessImg}
        datetext="3 Month"
        quotetext="Think Different Move Faster"
        biotext="Helping brands grow faster through creative strategy and powerful digital marketing."
        rdcname="Lina"
        rdcimg={MariaImg}
        oldprice="100"
        newprice="80"
      />
      <MarketingDivs
        mainimagee={HomeWorkImg}
        datetext="2 Month"
        quotetext="AWS Certified solutions Architect"
        biotext="Building modern businesses with innovation, consistency, passion, and smart execution."
        rdcname="Lina"
        rdcimg={LinaPfpImg}
        oldprice="100"
        newprice="80"
      />
      <MarketingDivs
        mainimagee={KeyBoardImg}
        datetext="4 Month"
        quotetext="Fear Less Achieve More"
        biotext="We create opportunities, inspire confidence, and help brands stand out naturally online."
        rdcname="Lina"
        rdcimg={CarlImg}
        oldprice="100"
        newprice="80"
      />
      <MarketingDivs
        mainimagee={DoingWorkImg}
        datetext="3 Month"
        quotetext="Born Ready Built Tough"
        biotext="Delivering quality, trust, innovation, and results for businesses ready to grow bigger."
        rdcname="Lina"
        rdcimg={LinaPfpImg}
        oldprice="100"
        newprice="80"
      />
      <MarketingDivs
        mainimagee={NoteImg}
        datetext="3 Month"
        quotetext="Think Different Move Faster"
        biotext="Helping brands grow faster through creative strategy and powerful digital marketing."
        rdcname="Lina"
        rdcimg={CarlImg}
        oldprice="100"
        newprice="80"
      />
      <MarketingDivs
        mainimagee={TypingImg}
        datetext="2 Month"
        quotetext="AWS Certified solutions Architect"
        biotext="Building modern businesses with innovation, consistency, passion, and smart execution."
        rdcname="Lina"
        rdcimg={MariaImg}
        oldprice="100"
        newprice="80"
      />
      <MarketingDivs
        mainimagee={SiteImg}
        datetext="3 Month"
        quotetext="Think Different Move Faster"
        biotext="Helping brands grow faster through creative strategy and powerful digital marketing."
        rdcname="Lina"
        rdcimg={LinaPfpImg}
        oldprice="100"
        newprice="80"
      />
      <MarketingDivs
        mainimagee={HomeLearningImg}
        datetext="4 Month"
        quotetext="Fear Less Achieve More"
        biotext="We create opportunities, inspire confidence, and help brands stand out naturally online."
        rdcname="Lina"
        rdcimg={CarlImg}
        oldprice="100"
        newprice="80"
      />
    </div>
  );
};

export default Architect;
