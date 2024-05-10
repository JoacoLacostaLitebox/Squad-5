"use client";

// Next
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Components
import SplashScreen from "@/components/SplashScreen/SplashScreen";

// Font
const Phonk = localFont({ src: "../public/fonts/PhonkContrast.otf" });

export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && isHome ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <main
          className={`flex min-h-screen flex-col items-center justify-center p-24 bg-fukuro-bone ${Phonk.className}`}
        >
          <p className="text-fukuro-blue font-bold text-3xl">fukuro</p>
        </main>
      )}
    </>
  );
}
