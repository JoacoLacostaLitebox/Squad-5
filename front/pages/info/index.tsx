// Next
import Link from "next/link";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import React from "react";

// Component
import BaseLayout from "@/components/BaseLayout/BaseLayout";
import Button from "@/components/Button/Button";

// Font
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });
const Mont = Montserrat({ style: ["normal"], subsets: ["latin"] });

const Info = () => {
  const steps = [
    "Recibi tu fukuro",
    "Escanea tus productos desechables",
    "Llena tu fukuro y acercala a un punto verde",
  ];
  return (
    <BaseLayout noBottomDecoration>
      <div className="flex flex-col w-full justify-between h-full gap-10 mt-12 mb-[60px]">
        {steps.map((step, index) => {
          return (
            <div
              className={`flex flex-col items-center gap-1 animate__animated animate__fadeInUp delay-${index}00`}
              key={index}
            >
              <div className="bg-fukuro-orange/10 h-7 w-7 justify-center items-center rounded-full flex">
                <p
                  className={`text-fukuro-orange text-base ${Phonk.className} text-center`}
                >
                  {index + 1}
                </p>
              </div>
              <p
                className={`text-fukuro-black text-2xl ${Phonk.className} text-center`}
              >
                {step}
              </p>
              {index === 0 && (
                <div className="bg-fukuro-bone rounded-full py-2 px-3 w-fit h-fit -rotate-[5.4deg] mt-2">
                  <p
                    className={`${Mont.className} text-fukuro-blue text-xs text-center font-semibold`}
                  >
                    ¡Nuestra tote bag!
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Link href="/" className="cursor-pointer">
        <Button text="Comenzar" type="primary" />
      </Link>
    </BaseLayout>
  );
};

export default Info;
