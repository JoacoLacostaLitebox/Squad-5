import React from "react";

import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";

import InstagramLogo from "./assets/Instagram.svg";
import FacebookLogo from "./assets/Facebook.svg";
import LinkedinLogo from "./assets/Linkedin.svg";
import XLogo from "./assets/X.svg";
import Image from "next/image";

const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });
const DMSans = DM_Sans({ style: ["normal"], subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="bg-fukuro-bone w-full h-[148px] rounded-2xl px-6 py-8 flex flex-col gap-4">
      <p className={`${Phonk.className} text-fukuro-black text-2xl`}>fukuro</p>
      <div className="flex flex-row justify-between align-bottom">
        <div className="flex flex-row gap-[18px]">
          <Image
            src={InstagramLogo}
            alt="instagram logo"
            width={20}
            height={20}
          />
          <Image
            src={FacebookLogo}
            alt="facebook logo"
            width={20}
            height={20}
          />
          <Image
            src={LinkedinLogo}
            alt="linkedin logo"
            width={20}
            height={20}
          />
          <Image src={XLogo} alt="x logo" width={20} height={20} />
        </div>
        <div className="flex flex-col gap-[6px] items-end">
          <p className={`text-fukuro-black text-xs ${DMSans.className}`}>
            Política de Privacidad
          </p>
          <p className={`text-fukuro-black text-xs ${DMSans.className}`}>
            Términos y Condiciones
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
