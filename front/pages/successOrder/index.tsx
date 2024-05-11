// Next
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

// Components
import Button from "@/components/Button/Button";
import BaseLayout from "@/components/BaseLayout/BaseLayout";
import SuccessTitle from "@/components/SuccessTitle/SuccessTitle";
import BagInfoComponent from "@/components/BagInfoComponent/BagInfoComponent";

// Font
const DMSans = DM_Sans({ style: ["normal"], subsets: ["latin"] });

// Data
import deliveryPoints from "@/deliveryPoints.json";

const SuccessOrder = () => {
    const [deliveryPoint, setDeliveryPoint] = useState(useSearchParams().get("deliveryPoint"));
  const deliveryPointData = deliveryPoints.find(
    (point) => point.id === deliveryPoint
  );

  const successMessages = [
    "Llenaste tu",
    "bolsa con",
    "productos",
    "reciclables",
  ];

  return (
    <BaseLayout noBottomDecoration>
      <div className="flex flex-col items-center">
        <SuccessTitle caption="¡Felicitaciones!" titleLines={successMessages} />
        <p
          className={`${DMSans.className} text-fukuro-black font-regular text-center mt-4`}
        >
          Acercate al punto de entrega elegido para dejar tus productos
          desechables y escaneá tu bolsa para sumar puntos.
        </p>
        <BagInfoComponent
          centered
          className="w-full mt-8"
          title="Punto de entrega"
          firstLine={deliveryPointData?.address.firstLine}
          secondLine={deliveryPointData?.address.secondLine}
        />
      </div>
      <div className="mt-14 mb-16">
        <Link href="/create">
          <Button text="Cargar otra bolsa" type="primary" />
        </Link>
        <Link href="/">
          <Button text="Volver al Inicio" />
        </Link>
      </div>
    </BaseLayout>
  );
};

export default SuccessOrder;
