import React from "react";
import Header from "../Components/Header/Header";
import University from "../Components/SeeAllComponents/University/University";
import Sellection from "../Components/SeeAllComponents/Sellection/Sellection";
import Books from "../Components/SeeAllComponents/Books/Books";
import Footer from "../Components/Footer/Footer";

const seeallrouting = () => {
  return (
    <div className=" w-[1912px] m-auto">
      <Header />
      <University />
      <Sellection />
      <Books />
      <Footer />
    </div>
  );
};

export default seeallrouting;
