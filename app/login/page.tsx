import React from "react";
import Login from "../Components/LoginComponents/Login/Login";
import Header from "../Components/Header/Header";

const loginrouting = () => {
  return (
    <div className=" w-[1912px] m-auto bg-[fff]">
      <Header />
      <Login />
    </div>
  );
};

export default loginrouting;
