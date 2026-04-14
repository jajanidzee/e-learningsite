import Image from "next/image";
import Header from "./Components/Header/Header";
import OnlineStudying from "./Components/HomeComponents/OnlineStudying/OnlineStudying";
import Software from "./Components/HomeComponents/Software/Software";

export default function Home() {
  return (
    <div className=" w-[1912px] m-auto ">
      <Header />
      <OnlineStudying />
      <Software />
    </div>
  );
}
