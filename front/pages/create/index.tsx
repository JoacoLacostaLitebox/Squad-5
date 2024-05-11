// Next
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import React from "react";

// Assets
import CheckIcon from "@/public/assets/icons/check-orange.svg";
import ArrowIcon from "@/public/assets/icons/arrow-right.svg";

// Font
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });
const DMSans = DM_Sans({ style: ["normal"], subsets: ["latin"] });

import BaseLayout from "@/components/BaseLayout/BaseLayout";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";

const Create = () => {
  const recommendations = [
    {
      id: 1,
      children: (
        <p
          className={`${DMSans.className} text-fukuro-black text-base hyphens-auto`}
        >
          <b>Limpiá</b> los envases de plástico para eliminar restos de
          alimentos.
        </p>
      ),
    },
    {
      id: 2,
      children: (
        <p
          className={`${DMSans.className} text-fukuro-black text-base hyphens-auto`}
        >
          <b>Retirá</b> las tapas y etiquetas de los envases, ya que suelen
          estar hechas de materiales diferentes y deben ser tratadas por
          separado.
        </p>
      ),
    },
    {
      id: 3,
      children: (
        <p
          className={`${DMSans.className} text-fukuro-black text-base hyphens-auto`}
        >
          <b>Verificá</b> que los envases de plástico estén identificados con el
          símbolo de reciclaje y el número que indica el tipo de plástico (PET,
          HDPE, PVC, etc.).
        </p>
      ),
    },
  ];
  return (
    <BaseLayout noBottomDecoration>
      <div className="flex flex-col mt-10 z-10 mb-16">
        <p className={`${Phonk.className} text-fukuro-orange text-base`}>
          Llenar una bolsa nueva
        </p>
        <h2 className={`${Phonk.className} text-fukuro-black text-2xl my-2`}>
          Antes de empezar te recomendamos
        </h2>
        <div>
          {recommendations.map((recommendation) => {
            return (
              <div
                key={recommendation.id}
                className="py-6 border-b border-fukuro-black flex flex-row gap-3 items-center"
              >
                <div className="bg-fukuro-orange/10 min-h-7 min-w-7 justify-center rounded-full flex">
                  <Image src={CheckIcon} alt="recommendation" />
                </div>
                <div className="w-fit">{recommendation.children}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-12">
          <Link href="/scan">
            <Button
              rightIcon={ArrowIcon}
              text="Comenzar"
              type="primary"
            />
          </Link>
          <Link href="/">
            <Button text="Volver" />
          </Link>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Create;
