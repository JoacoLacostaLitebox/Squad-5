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
  const getItemsQuery = () => {
    // TODO Create query using scanned items
    return "?items=...";
  };

  const successMessages = ["Producto", "escaneado", "con exito"];

  return (
    <div className="flex flex-col items-center">
      <SuccessTitle caption="¡Excelente!" titleLines={successMessages} />
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
