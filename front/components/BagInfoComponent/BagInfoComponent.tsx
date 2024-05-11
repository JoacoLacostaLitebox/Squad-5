import React from "react";
import localFont from "next/font/local";
import ShoppingBag from "./assets/shopping-bag.svg";
import Image from "next/image";
import { DM_Sans } from "next/font/google";

const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });
const DMSans = DM_Sans({ style: ["normal"], subsets: ["latin"] });

interface Props {
  title: string;
  description?: string;
  bagItems?: { itemName: string; itemQuantity: number }[];
  className?: string;
  centered?: boolean;
}

const BagInfoComponent = ({
  title,
  className,
  bagItems,
  centered,
  description,
}: Props) => {
  return (
    <div
      className={`bg-fukuro-bone rounded-2xl px-6 py-5 flex flex-col gap-3 mx-auto mb-2 relative w-[327px] ${className}`}
    >
      <div className={`flex flex-col gap-[6px] ${centered && "items-center"}`}>
        <div className={`py-2 rounded-3xl w-fit`}>
          <p className={`text-fukuro-orange text-[16px] ${Phonk.className}`}>
            {title}
          </p>
        </div>
        <div
          className={`flex flex-col ${centered && "items-center text-center"} ${
            DMSans.className
          }`}
        >
          {bagItems
            ? bagItems.map((item, index) => (
                <span className="my-1 font-light" key={index}>
                  {item.itemQuantity} {item.itemName}
                </span>
              ))
            : description}
        </div>
        {bagItems && (
          <div className="bg-fukuro-orange px-3 py-2 my-2 rounded-3xl w-fit">
            <p className={`${DMSans.className} text-fukuro-white text-[16px]`}>
              Total {bagItems.reduce((acum, el) => acum + el.itemQuantity, 0)}{" "}
              desechos
            </p>
          </div>
        )}
      </div>
      {bagItems && (
        <div className="bg-fukuro-orange rounded-full w-14 h-14 absolute flex justify-center bottom-14 -right-4">
          <Image src={ShoppingBag} alt="shopping bag icon" />
        </div>
      )}
    </div>
  );
};

export default BagInfoComponent;
