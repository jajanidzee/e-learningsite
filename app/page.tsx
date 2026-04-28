import Image from "next/image";
import Header from "./Components/Header/Header";
import OnlineStudying from "./Components/HomeComponents/OnlineStudying/OnlineStudying";
import Software from "./Components/HomeComponents/Software/Software";
import WhatIsIt from "./Components/HomeComponents/WhatIsIt/WhatIsIt";
import Physical from "./Components/HomeComponents/Physical/Physical";
import Features from "./Components/HomeComponents/Features/Features";
import Tools from "./Components/HomeComponents/Tools/Tools";
import Assessments from "./Components/HomeComponents/Assessments/Assessments";
import Management from "./Components/HomeComponents/Management/Management";

export default function Home() {
  return (
    <div className=" w-[1912px] m-auto ">
      <Header />
      <OnlineStudying />
      <Software />
      <WhatIsIt />
      <Physical />
      <Features />
      <Tools />
      <Assessments />
      <Management />
    </div>
  );
}
