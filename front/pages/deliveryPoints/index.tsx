import BaseLayout from "@/components/BaseLayout/BaseLayout";
import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Button from "@/components/Button/Button";
import ArrowIcon from '@/public/assets/icons/arrow-left.svg'
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });

const index = () => {
  return (
    <BaseLayout noBottomDecoration>
      <div className="flex flex-col mt-2">
        <h2 className={`${Phonk.className} text-fukuro-black text-2xl my-8 text-center`}>
          Descubri tus puntos de entrega mas cercanos y obtene beneficios
        </h2>
        <div className="w-full h-full">
          <iframe
            src="https://epok.buenosaires.gob.ar/pub/mapa/dglimpieza/puestos_de_recoleccion/"
            width="100%"
            height="400"
            className="rounded-xl"
          ></iframe>
        </div>
        <Link href="/" className="cursor-pointer">
          <Button leftIcon={ArrowIcon} text="Volver al Inicio" centered />
        </Link>
      </div>
    </BaseLayout>
  );
};

export default index;
