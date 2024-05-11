// Next
import Link from "next/link";
import Button from "../Button/Button";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import React from "react";

// Assets
import PlusIcon from "@/public/assets/icons/plus.svg";

// Font
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });
const Mont = Montserrat({ style: ["normal"], subsets: ["latin"] });

interface SuccessScreenProps {
  scannedItems: any[];
  onLoadMore: () => void;
}

const SuccessScreen = ({ scannedItems, onLoadMore }: SuccessScreenProps) => {

  const getItemsQuery = () => {
    // TODO Create query using scanned items
    return "?items=...";
  };

  const successMessages = ["Producto", "escaneado", "con exito"];
  return (
    <div className="flex flex-col items-center">
      <div className="bg-fukuro-bone rounded-full py-2 px-3 w-fit h-fit -rotate-[5.4deg] mt-[78px]">
        <p
          className={`${Mont.className} text-fukuro-blue text-sm text-center font-semibold`}
        >
          ¡Excelente!
        </p>
      </div>
      <div className={`${Phonk.className} justify-center w-full`}>
        {successMessages.map((message, index) => (
          <h2
            key={index}
            className={`${Phonk.className} text-fukuro-blue text-[32px] text-center`}
          >
            {message}
          </h2>
        ))}
      </div>
      <div className="w-full mt-14">
        <Button
          rightIcon={PlusIcon}
          text="Agregar mas productos"
          type="primary"
          onClick={onLoadMore}
        />
        <Link href={`/delivery${getItemsQuery()}`}>
          <Button text="Cerrar bolsa y elegir entrega" />
        </Link>
      </div>
    </div>
  );
};

export default SuccessScreen;
