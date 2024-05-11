import BaseLayout from "@/components/BaseLayout/BaseLayout";
import SuccessTitle from "@/components/SuccessTitle/SuccessTitle";
import React from "react";
import { DM_Sans } from "next/font/google";
import BagInfoComponent from "@/components/BagInfoComponent/BagInfoComponent";
import Link from "next/link";
import Button from "@/components/Button/Button";
const DMSans = DM_Sans({ style: ["normal"], subsets: ["latin"] });

const SuccessOrder = () => {
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
          description="Plaza Vicente Lopez y Planes, Montevideo 1301, CABA"
        />
      </div>
      <div className="mt-14 mb-16">
        <Link href="/create">
          <Button text="Cargar otra bolsa" type="primary" />
        </Link>
        <Link href="/">
          <Button text="Volver al inicio" />
        </Link>
      </div>
    </BaseLayout>
  );
};

export default SuccessOrder;
