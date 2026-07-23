"use client";
import React from "react";

const CourseVideo = () => {
  return (
    <div className="mt-[50px] mx-[50px]">
      <iframe
        className="w-[1323px] h-[884px]"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/bAhM3td5PzY?si=gz1s8Zy73Ww8fBKk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default CourseVideo;
