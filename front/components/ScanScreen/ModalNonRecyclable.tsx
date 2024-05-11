import React from 'react';
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import Button from '../Button/Button';


// Font
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });
const DMSans = DM_Sans({ style: ["normal"], subsets: ["latin"] });

interface ModalNonRecyclableProps {
  onClose: () => void;
}

const ModalNonRecyclable = ({ onClose }: ModalNonRecyclableProps) => {
  return(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-fukuro-black opacity-50"></div>
      <div className="bg-fukuro-white p-8 rounded-xl z-10 flex items-center flex-col gap-y-5">
        <h2 className={`text-lg font-bold mb-4 ${Phonk.className} text-fukuro-black`}>Algo salio mal </h2>
        <p className={`${DMSans.className} text-fukuro-black`}>El item que escaneaste no es reciclable, intentá nuevamente.</p>
        <Button  onClick={onClose} text='Seguir escaneando' type='primary'/>
      </div>
    </div>
  )
}

export default ModalNonRecyclable;
