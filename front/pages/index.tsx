"use client";

import SplashScreen from "@/components/Splashscreen";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

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
          className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-fukuro-bone`}
        >
          <p className="text-fukuro-blue font-bold">
            Hello world! This is Fukuro
          </p>
        </main>
      )}
    </>
  );
}
