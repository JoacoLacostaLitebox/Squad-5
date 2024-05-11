// Next
import Image from "next/image";
import React from "react";

// Context
import { useAuth } from "@/context/AuthContext";

// Components
import Footer from "../Footer/Footer";
import Branding from "../Branding/Branding";
import BottomDecoration from "../BottomDecoration/BottomDecoration";

// Assets
import LogoutIcon from "@/public/assets/icons/log-out.svg";

interface BaseLayoutProps {
  children: string | JSX.Element | JSX.Element[];
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const { logOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-fukuro-white justify-between">
      <div className="flex flex-col h-full w-full relative px-6">
        <div className="flex relative justify-center items-center w-full h-fit mt-8">
          <Branding />
          <button onClick={handleSignOut} className="absolute right-0">
            <Image src={LogoutIcon} alt="log out" />
          </button>
        </div>
        {children}
      </div>
      <Footer />
      <BottomDecoration />
    </div>
  );
};

export default BaseLayout;
