// Next
import Link from "next/link";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import { useRouter } from "next/router";
import React, { useState } from "react";

// Components
import Button from "@/components/Button/Button";
import BaseLayout from "@/components/BaseLayout/BaseLayout";

// Assets
import ArrowIcon from "@/public/assets/icons/arrow-right.svg";

// Fonts
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });
const DMSans = DM_Sans({ style: ["normal"], subsets: ["latin"] });

// Data
import deliveryPoints from "@/deliveryPoints.json";

const Delivery = () => {
  const itemsQuery = useRouter().asPath.replace("/delivery", "");
  const [deliveryPoint, setDeliveryPoint] = useState("");

  return (
    <BaseLayout noBottomDecoration>
      <div className="flex flex-col mt-8">
        <h2 className={`${Phonk.className} text-fukuro-black text-2xl my-2`}>
          Selecciona tu punto de entrega
        </h2>
        <div className="mt-2">
          {deliveryPoints.map((point) => {
            return (
              <div
                className="flex flex-row-reverse w-full justify-between items-center py-4 border-b border-fukuro-black last:border-none animate__animated animate__fadeIn"
                key={point.id}
              >
                <input
                  id={`${point.id}-radio`}
                  type="radio"
                  value={deliveryPoint}
                  name="colored-radio"
                  className="w-5 h-5 accent-fukuro-orange"
                  onClick={() => setDeliveryPoint(point.id)}
                />
                <label
                  htmlFor={`${point.id}-radio`}
                  className={`${DMSans.className} text-base text-fukuro-black font-bold`}
                >
                  {point.label}
                </label>
              </div>
            );
          })}
        </div>
        <div className="mt-6">
          <Link
            href={`/confirmOrder${itemsQuery}&deliveryPoint=${deliveryPoint}`}
            aria-disabled={deliveryPoint === ""}
            tabIndex={deliveryPoint === "" ? -1 : undefined}
            className={`${deliveryPoint === "" ? "pointer-events-none" : "cursor-pointer"}`}
          >
            <Button
              rightIcon={ArrowIcon}
              text="Continuar"
              type="primary"
              className={`${
                deliveryPoint === "" ? "opacity-40" : "opacity-100"
              }`}
            />
          </Link>
          <Button text="Ingresar direccion manualmente" />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Delivery;
