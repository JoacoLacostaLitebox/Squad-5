"use client";

// Next
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Components
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import { useAuth } from "@/context/AuthContext";

// Font
const Phonk = localFont({ src: "../public/fonts/PhonkContrast.otf" });

export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  const { user, googleSignIn, logOut } = useAuth();
  const [loading, setLoading] = useState(true);

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
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        !user ?
          <>
            <div style={{ display: "flex", height: '100vh', width: '100%', background: 'red' }}>
              <p>registrarse</p>
              <p className="cursor-pointer" onClick={handleSignIn}>
                Log in
              </p>
            </div>
          </>
          :
          <div style={{ display: "flex", height: '100vh', width: '100%', background: 'green', justifyContent: "center", alignContent: "center" }}>
            <p>Welcome, {user.displayName}</p>
            <p className="cursor-pointer" onClick={handleSignOut}>
              Sign out
            </p>
          </div>

      )}
    </>
  );
}
