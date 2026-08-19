import React from "react";
import LoginImg from "../../../../public/Login.png";
import Image from "next/image";
const Login = () => {
  return (
    <div className="py-[38px] pl-[41px] pr-[97px] flex gap-[111px] mt-[30px] ml-[140px] ">
      <Image src={LoginImg} alt="LoginImg"></Image>
      <div className="w-[500px] flex flex-col items-center ">
        {" "}
        <div className="pt-[107px] text-center">
          <p className="font-[Poppins] font-bold text-[28px]  text-[#000] ">
            Welcome to Login..!
          </p>
        </div>
        <button className="w-[329px] bg-[#49BBBD] rounded-[33px] mt-[24px] py-[8px] px-[52px] font-[Poppins] font-medium text-[28px]  text-[#fff]">
          Login
        </button>
        <p className="font-[Poppins] font-medium text-[24px] mt-[52px] text-[#000]">
          Logging into an account requires a username and password.
        </p>{" "}
        <form action="" className="flex flex-col mt-[42px] items-start">
          {" "}
          <label
            htmlFor="username"
            className="text-[#000] font-[Poppins] font-medium text-[24px] 
        "
          >
            username
          </label>
          <input
            placeholder="Enter your User name"
            type="text"
            className="w-[535px] rounded-[40px] border-[1px] border-[#49BBBD] py-[15px] pl-[31px] font-[Poppins] font-semibold placeholder: text-[20px] text-[#9D9B9B] "
          />{" "}
          <label
            htmlFor="Password"
            className="text-[#000] font-[Poppins] font-medium text-[24px] mt-[30px] 
        "
          >
            Password
          </label>
          <input
            placeholder="Enter your User Passwod"
            type="password"
            className="w-[535px] rounded-[40px] border-[1px] border-[#49BBBD] py-[15px] pl-[31px] font-[Poppins] font-semibold placeholder:text-[20px] text-[#9D9B9B] "
          />
          <div className="mt-[22px] flex items-center justify-between w-[500px]">
            {" "}
            <div className="flex items-center gap-[10px]">
              {" "}
              <input type="checkbox" className="w-[20px] h-[20px]" />
              <p className="text-[#000] font-[Poppins] font-light text-[16px]">
                Rememebr me
              </p>
            </div>{" "}
            <p className="text-[#000] font-[Poppins] font-light text-[16px]">
              Forgot Password ?
            </p>
          </div>
        </form>{" "}
        <button className="w-[329px] bg-[#49BBBD] rounded-[33px] mt-[24px] py-[8px] px-[52px] font-[Poppins] font-medium text-[28px]  text-[#fff]">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
