import React from "react";
import Header from "../Components/Header/Header";
import CheckOut from "../Components/BuyNowComponents/CheckOut/CheckOut";
import TopListed from "../Components/BuyNowComponents/TopListed/TopListed";
import Footer from "../Components/Footer/Footer";

const buynowrouting = () => {
  return (
    <div className=" w-[1912px] m-auto">
      <Header />
      <CheckOut />
      <TopListed />
      <Footer />
    </div>
  );
};

export default buynowrouting;
