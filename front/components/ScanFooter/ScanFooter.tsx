import React from 'react';
import Image from 'next/image';
import ReverseIcon from "@/public/assets/icons/reverse-icon.svg";

interface ScanFooterProps {
  isDisabled: boolean;
  onCapture: () => void;
  onReverseCamera: () => void;
};

const ScanFooter = ({ isDisabled, onCapture, onReverseCamera }: ScanFooterProps) => {
  return(
    <div className='flex h-40 w-full fixed bottom-0 rounded-tl-2xl rounded-tr-2xl bg-fukuro-full-white items-center justify-around'>
      <span className='w-10 h-10 rounded-full bg-fukuro-black' />
      <button className={`flex items-center justify-center ${isDisabled ? 'opacity-30' : ''}`} onClick={onCapture} disabled={isDisabled}>
        <span className='bg-fukuro-orange w-20 h-20 rounded-full opacity-30' />
        <span className='bg-fukuro-orange w-10 h-10 rounded-full absolute' />
      </button>
      <button onClick={onReverseCamera}>
        <Image
          src={ReverseIcon}
          width={40}
          height={40}
          alt="Reverse Icon"
        />
      </button>
    </div>
  )
};

export default ScanFooter;
