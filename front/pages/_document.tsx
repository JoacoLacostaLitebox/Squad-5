import { Metadata } from "next";
import { Html, Head, Main, NextScript } from "next/document";

export const metadata: Metadata = {
  title: "Fukuro",
  description: "Fukuro App",
};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
