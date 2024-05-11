"use client";

// Next
import Image from "next/image";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Context
import { useAuth } from "@/context/AuthContext";

// Components
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import Footer from "@/components/Footer/Footer";
import PointsContainer from "@/components/PointsContainer/PointsContainer";
import Button from "@/components/Button/Button";
import BottomDecoration from "@/components/BottomDecoration/BottomDecoration";
import LoginScreen from "@/components/LoginScreen/LoginScreen";
import Branding from "@/components/Branding/Branding";

// Type
import { User } from "firebase/auth";

// Assets
import LogoutIcon from "@/public/assets/icons/log-out.svg";
import BagIcon from "@/public/assets/icons/shopping-bag.svg";
import HomeIcon from "@/public/assets/icons/home.svg";
import InfoIcon from "@/public/assets/icons/info.svg";

// Font
const Phonk = localFont({ src: "../public/fonts/PhonkContrast.otf" });
const DMSans = DM_Sans({ style: ["normal"], subsets: ["latin"] });

export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  const { user, googleSignIn, logOut } = useAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const getDisplayName = (user: User) => {
    if (user && user.displayName)
      return `¡Hola, ${user.displayName.split(" ")[0]}!`;
    return "¡Hola!";
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <SplashScreen
          finishLoading={() => {
            document.body.style.overflow = "auto";
            setIsLoading(false);
          }}
        />
      ) : !user ? (
        <LoginScreen onClick={handleSignIn} />
      ) : (
        <div className="flex flex-col h-screen w-screen bg-fukuro-white justify-between">
          <div className="flex flex-col h-full w-full relative px-6">
            <div className="flex relative justify-center items-center w-full h-fit mt-8">
              <Branding />
              <button onClick={handleSignOut} className="absolute right-0">
                <Image src={LogoutIcon} alt="log out" />
              </button>
            </div>
            <p
              className={`${DMSans.className} text-fukuro-black font-bold text-2xl mt-6`}
            >
              {getDisplayName(user)}
            </p>
            <PointsContainer points={374930} />
            <Button
              onClick={() => {}}
              leftIcon={BagIcon}
              text="Llenar una bolsa nueva"
              type="primary"
              className="w-full"
            />
            <Button
              onClick={() => {}}
              leftIcon={HomeIcon}
              text="Puntos de entrega"
              className="w-full border-b border-fukuro-black rounded-none"
            />
            <Button
              onClick={() => {}}
              leftIcon={InfoIcon}
              text="Informacion"
              className="w-full border-b border-fukuro-black rounded-none"
            />
          </div>
          <Footer />
          <BottomDecoration />
        </div>
      )}
    </>
  );
}
