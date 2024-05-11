// Next
import Image from "next/image";
import React from "react";

// Components
import Footer from "../Footer/Footer";
import Branding from "../Branding/Branding";
import BottomDecoration from "../BottomDecoration/BottomDecoration";

// Assets
import LogoutIcon from "@/public/assets/icons/log-out.svg";

interface BaseLayoutProps {
  handleSignOut?: () => void;
  children: string | JSX.Element | JSX.Element[];
  noBottomDecoration?: boolean;
}

const BaseLayout = ({
  handleSignOut,
  children,
  noBottomDecoration = false,
}: BaseLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen h-full w-screen bg-fukuro-white justify-between relative">
      <div className={`flex flex-col h-full w-full  px-6 ${noBottomDecoration ? '' : 'mb-[200px] pb-[20px]'} `}>
        <div className="flex relative justify-center items-center w-full h-fit mt-8">
          <Branding />
          {handleSignOut && (
            <button onClick={handleSignOut} className="absolute right-0">
              <Image src={LogoutIcon} alt="log out" />
            </button>
          )}
        </div>
        {children}
      </div>
      <BottomDecoration noBottomDecoration={noBottomDecoration} />
      <Footer />
    </div>
  );
};

export default BaseLayout;
