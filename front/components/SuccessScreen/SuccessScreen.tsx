// Next
import Link from "next/link";
import Button from "../Button/Button";
import React from "react";

// Assets
import PlusIcon from "@/public/assets/icons/plus.svg";
import SuccessTitle from "../SuccessTitle/SuccessTitle";

interface SuccessScreenProps {
  scannedItems: any[];
  onLoadMore: () => void;
}

const SuccessScreen = ({ scannedItems, onLoadMore }: SuccessScreenProps) => {
  const currentItem = scannedItems[scannedItems.length - 1];

  const getItemsQuery = () => {
    const results = {
      paper: scannedItems.filter((x) => x === "Paper").length,
      glass: scannedItems.filter((x) => x === "Glass").length,
      organic: scannedItems.filter((x) => x === "Organic").length,
      cardboard: scannedItems.filter((x) => x === "Cardboard").length,
      metal: scannedItems.filter((x) => x === "Metal").length,
      plastic: scannedItems.filter((x) => x === "Plastic").length,
    };
    return `?papel=${results.paper}&glass=${results.glass}&organic=${results.organic}&cardboard=${results.cardboard}&metal=${results.metal}&plastic=${results.plastic}`;
  };

  const getCurrentItemMaterial = (currentItem: string) => {
    switch (currentItem) {
      case "Paper":
        return "Desecho de papel";
      case "Glass":
        return "Desecho de vidrio";
      case "Organic":
        return "Desecho organico";
      case "Cardboard":
        return "Desecho de carton";
      case "Metal":
        return "Desecho metalico";
      case "Plastic":
        return "Desecho plastico";
      default:
        return "Producto";
    }
  };

  const successMessages = [
    getCurrentItemMaterial(currentItem),
    "escaneado",
    "correctamente",
  ];

  return (
    <div className="flex flex-col items-center">
      <SuccessTitle caption="¡Excelente!" titleLines={successMessages} />
      <div className="w-full mt-14 animate__animated animate__fadeInDown">
        <Button
          rightIcon={PlusIcon}
          text="Agregar otro producto"
          type="primary"
          onClick={onLoadMore}
          className="cursor-pointer"
        />
        <Link href={`/delivery${getItemsQuery()}`} className="cursor-pointer">
          <Button text="Elegir punto de entrega" />
        </Link>
      </div>
    </div>
  );
};

export default SuccessScreen;
