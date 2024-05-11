// Next
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

// Context
import { useAuth } from "@/context/AuthContext";

// Components
import BaseLayout from "@/components/BaseLayout/BaseLayout";
import BagInfoComponent from "@/components/BagInfoComponent/BagInfoComponent";
import Button from "@/components/Button/Button";

// Assets
import SemiCircle from "./assets/semi-circle.svg";
import CheckIcon from "@/public/assets/icons/check-black.svg";

// Fonts
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });
const DMSans = DM_Sans({ style: ["normal"], subsets: ["latin"] });

// Data
import deliveryPoints from "@/deliveryPoints.json";
import { useState } from "react";

const ConfirmOrder = () => {
  const { user } = useAuth();
  const { push } = useRouter();

  const [paperItems, _setPaperItems] = useState(useSearchParams().get("paper"));
  const [glassItems, _setGlassItems] = useState(useSearchParams().get("glass"));
  const [organicItems, _setOrganicItems] = useState(
    useSearchParams().get("organic")
  );
  const [cardboardItems, _setCardboardItems] = useState(
    useSearchParams().get("cardboard")
  );
  const [metalItems, _setMetalItems] = useState(useSearchParams().get("metal"));
  const [plasticItems, _setPlasticItems] = useState(
    useSearchParams().get("plastic")
  );

  const deliveryPoint = useSearchParams().get("deliveryPoint");
  const deliveryPointData = deliveryPoints.find(
    (point) => point.id === deliveryPoint
  );

  const trashItems = [
    { itemName: "Desechos de papel", itemQuantity: Number(paperItems) },
    { itemName: "Desechos de vidrio", itemQuantity: Number(glassItems) },
    { itemName: "Desechos orgánicos", itemQuantity: Number(organicItems) },
    { itemName: "Desechos de cartón", itemQuantity: Number(cardboardItems) },
    { itemName: "Desechos metálicos", itemQuantity: Number(metalItems) },
    { itemName: "Desechos plásticos", itemQuantity: Number(plasticItems) },
  ];

  const fukupoints = trashItems.reduce((acum, el) => acum + el.itemQuantity, 0);

  const handleConfirm = async () => {
    try {
      let data = {
        userId: user?.uid,
        fukupoints,
      };

      let response = await fetch('https://fukuro.litebox.ai/fukupoints', {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      push(`/successOrder?deliveryPoint=${deliveryPoint}`);
    } catch (error) {
      console.error("There was a problem fetching the data:", error);
    }
  };

  return (
    <BaseLayout noBottomDecoration>
      <div className="flex relative mt-8 mb-6 isolate">
        <h2
          className={`${Phonk.className} text-fukuro-black text-2xl mt-5 mb-2 pr-[116px]`}
        >
          Confirmar el contenido de tu bolsa
        </h2>
        <Image
          className="absolute -right-6 -z-10 animate__animated animate__rollIn"
          src={SemiCircle}
          alt="semi circle image"
        />
      </div>
      <div className="flex flex-col gap-4 mb-16 ">
        <BagInfoComponent
          title="Cantidad de elementos"
          bagItems={trashItems}
          fukupoints={fukupoints}
          className="w-full animate__animated animate__backInUp"
        />
        <BagInfoComponent
          title="Punto de entrega"
          firstLine={deliveryPointData?.address.firstLine}
          secondLine={deliveryPointData?.address.secondLine}
          className="w-full animate__animated animate__backInUp"
        />
        <Link
          href={`/successOrder?deliveryPoint=${deliveryPoint}`}
          className="cursor-pointer"
        >
          <Button
            rightIcon={CheckIcon}
            text="Confirmar y continuar"
            type="primary"
            onClick={handleConfirm}
          />
        </Link>
        <Link href={`/create`} className="cursor-pointer">
          <Button text="Reiniciar bolsa" />
        </Link>
      </div>
    </BaseLayout>
  );
};

export default ConfirmOrder;
