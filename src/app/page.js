"use client";
import React, { useRef } from "react";
import Lottie from "lottie-react";
import animationData from "./assets/Animation - 1724243637526.json";
export default function Home() {
  const lottieRef = useRef();
  return (
    <section className=" w-full h-full flex flex-col justify-center items-center overflow-hidden">
      <div className="text-holder my-5">
        <h1 className=" font-light text-xl md:text-5xl text-center text-orange-300 matemasie-regular">mobile animation created by Blender</h1>
      </div>
      <div className="anime-holder h-[40vh] flex justify-center items-center overflow-hidden">
      <Lottie className="w-[500px] md:w-[1000px]"
          animationData={animationData}
          lottieRef={lottieRef}
        />
      </div>
    </section>
  );
}
