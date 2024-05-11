"use client";

// Next
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Context
import { useAuth } from "@/context/AuthContext";
import { AuthContextProvider } from "@/context/AuthContext";

// Components
import LoginScreen from "@/components/LoginScreen/LoginScreen";
import SplashScreen from "@/components/SplashScreen/SplashScreen";

// Assets
import HomeScreen from "@/components/HomeScreen/HomeScreen";

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
    <AuthContextProvider>
      {isLoading ? (
        <SplashScreen
          finishLoading={() => {
            document.body.style.overflow = "auto";
            setIsLoading(false);
          }}
        />
      ) : !user ? (
        <LoginScreen handleSignIn={handleSignIn} />
      ) : (
        <HomeScreen user={user} handleSignOut={handleSignOut} />
      )}
    </AuthContextProvider>
  );
}
