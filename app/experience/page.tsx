import React from "react";
import Header from "../Components/Header/Header";
import OverView from "../Components/AboutUsComponents/OverView/OverView";
import Swift from "../Components/ExperienceComponents/Swift/Swift";
import RelatedBlog from "../Components/CourseComponents/RelatedBlog/RelatedBlog";
import Footer from "../Components/Footer/Footer";

const experiencerouting = () => {
  return (
    <div className=" w-[1912px] m-auto ">
      <Header />
      <OverView />
      <Swift />
      <RelatedBlog />
      <Footer />
    </div>
  );
};

export default experiencerouting;
