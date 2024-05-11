// Next
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import React from "react";

// Fonts
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });
const Mont = Montserrat({ style: ["normal"], subsets: ["latin"] });

interface SuccessTitleProps {
  caption: string;
  titleLines: string[];
}

const SuccessTitle = ({ caption, titleLines }: SuccessTitleProps) => {
  return (
    <>
      <div className="bg-fukuro-bone rounded-full py-2 px-3 w-fit h-fit -rotate-[5.4deg] mt-[78px] mb-4">
        <p
          className={`${Mont.className} text-fukuro-blue text-sm text-center font-semibold`}
        >
          {caption}
        </p>
      </div>
      <div className={`${Phonk.className} justify-center w-full`}>
        {titleLines.map((message, index) => (
          <h2
            key={index}
            className={`${Phonk.className} text-fukuro-blue text-[32px] text-center`}
          >
            {message}
          </h2>
        ))}
      </div>
    </>
  );
};

export default SuccessTitle;