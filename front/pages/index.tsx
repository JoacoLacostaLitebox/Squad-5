"use client";

// Next
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Components
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import { useAuth } from "@/context/AuthContext";
import Footer from "@/components/Footer/Footer";
import PointsContainer from "@/components/PointsContainer/PointsContainer";
import Button from "@/components/Button/Button";
import ArrowRight from "@/public/assets/arrow-right.svg";
import BottomDecoration from "@/components/BottomDecoration/BottomDecoration";
import LoginScreen from "@/components/LoginScreen/LoginScreen";

// Font
const Phonk = localFont({ src: "../public/fonts/PhonkContrast.otf" });

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
        <div className="flex flex-col h-screen w-screen bg-fukuro-white justify-between align-center">
          <p>Welcome, {user.displayName}</p>
          <p className="cursor-pointer" onClick={handleSignOut}>
            Sign out
          </p>
          <PointsContainer points={374930} />
          <Footer />
          <BottomDecoration />
        </div>
      )}
    </>
  );
}
