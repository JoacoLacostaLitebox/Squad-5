// Next
import localFont from "next/font/local";
import Image from "next/image";
import React from "react";

// Assets
import Texture from "@/public/assets/texture.png";

// Font
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });

interface Props {
  text: string;
  onClick?: () => void;
  leftIcon?: string;
  rightIcon?: string;
  className?: string;
  type?: "primary" | "secondary";
}

const Button = ({
  onClick,
  text,
  rightIcon,
  leftIcon,
  className = "",
  type = "secondary",
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-md overflow-hidden h-auto ${className}`}
    >
      {type === 'primary' && <Image
        src={Texture}
        alt="texture"
        className="absolute w-screen h-screen top-0 left-0 mix-blend-multiply opacity-70 z-10"
      />}
      <button
        className={`${Phonk.className} ${
          type === "primary" ? "bg-fukuro-bone" : ""
        } w-full py-6 flex items-center ${
          leftIcon ? "justify-start" : "justify-center"
        }`}
      >
        {leftIcon && (
          <Image src={leftIcon} alt="button left icon" className="ml-4 mr-2" />
        )}
        {text}
        {rightIcon && (
          <Image src={rightIcon} alt="button right icon" className="ml-2" />
        )}
      </button>
    </div>
  );
};

export default Button;
