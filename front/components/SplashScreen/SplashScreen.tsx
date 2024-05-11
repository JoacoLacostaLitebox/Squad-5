"use client";

// Next
import Image from "next/image";
import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
import anime from "animejs";

// Assets
import Decoration from "./assets/decoration.svg";
import Texture from "./assets/texture.png";

// Font
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen = ({ finishLoading }: SplashScreenProps) => {
  const animate = () => {
    document.body.style.overflow = 'hidden'
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
      <Image
        src={Texture}
        alt="texture"
        className="absolute w-screen h-screen top-0 left-0 mix-blend-multiply opacity-70 z-10"
      />
      <h1 className={`${Phonk.className} text-[56px] text-fukuro-bone mb-1/3 pb-[200px]`}>
        fukuro
      </h1>
      <Image
        src={Decoration}
        alt="Fukuro Splashcreen"
        className="absolute bottom-0 w-full h-fit pt-5"
      />
    </div>
  );
};

export default SplashScreen;
