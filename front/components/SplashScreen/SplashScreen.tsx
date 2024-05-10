"use client";

// Next
import localFont from "next/font/local";
import React, { useState, useEffect } from "react";
import anime from "animejs";

// Assets
import Decoration from "./assets/decoration.svg";
import Image from "next/image";

// Font
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });

const SplashScreen = ({ finishLoading }) => {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: "#splash",
        delay: 0,
        scale: 1,
        duration: 700,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#splash",
        delay: 100,
        scale: 1.25,
        duration: 700,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#splash",
        delay: 100,
        scale: 1,
        duration: 700,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#splash",
        delay: 100,
        scale: 1.25,
        duration: 700,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#splash",
        delay: 100,
        scale: 1,
        duration: 700,
        easing: "easeInOutExpo",
      });
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div
      className={`relative flex flex-col h-screen w-screen overflow-hidden items-center justify-center bg-fukuro-orange`}
      id="splash"
    >
      <h1 className={`${Phonk.className} text-[56px] text-fukuro-bone mb-1/3`}>
        fukuro
      </h1>
      <Image
        src={Decoration}
        alt="Fukuro Splashcreen"
        className="absolute bottom-0 w-full h-fit"
      />
    </div>
  );
};

export default SplashScreen;
