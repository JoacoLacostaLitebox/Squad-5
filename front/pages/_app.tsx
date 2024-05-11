import { AuthContextProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import { Metadata } from "next";
import type { AppProps } from "next/app";

export const metadata: Metadata = {
  title: "Fukuro",
  description: "Fukuro App",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
    <Component {...pageProps} />
    </AuthContextProvider>
  ) 
}
