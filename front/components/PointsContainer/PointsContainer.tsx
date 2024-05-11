import React from "react";

import Image from "next/image";
import localFont from "next/font/local";

import WhiteArrow from "../../public/assets/icons/arrow-white-right.svg";
import Coin from "../../public/assets/icons/coin.svg";

const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });

interface PointsContainerProps {
  points: number;
}

const PointsContainer = ({ points }: PointsContainerProps) => {
  return (
    <div className="bg-fukuro-blue rounded-2xl px-6 py-8 flex flex-col gap-3 relative mt-4 z-10">
      <div className="flex flex-col gap-[6px]">
        <div className="bg-fukuro-orange px-3 py-2 rounded-3xl w-fit">
          <p className={`text-fukuro-white text-[10px] ${Phonk.className}`}>
            Mis fukupoints
          </p>
        </div>
        <p className={`text-fukuro-white text-[48px] ${Phonk.className}`}>
          {points}
        </p>
      </div>
      <Image src={WhiteArrow} alt="white arrow icon" width={24} height={20} />
      <div className="bg-fukuro-orange rounded-full w-12 h-12 absolute flex justify-center -top-6 right-6">
        <Image src={Coin} alt="coin icon" />
      </div>
    </div>
  );
};

export default PointsContainer;
