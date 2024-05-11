"use client";

// Next
import Link from "next/link";
import { DM_Sans } from "next/font/google";

// Type
import { User } from "firebase/auth";

// Components
import Button from "@/components/Button/Button";
import PointsContainer from "@/components/PointsContainer/PointsContainer";

// Assets
import BagIcon from "@/public/assets/icons/shopping-bag.svg";
import HomeIcon from "@/public/assets/icons/home.svg";
import InfoIcon from "@/public/assets/icons/info.svg";
import BaseLayout from "@/components/BaseLayout/BaseLayout";
import { useEffect, useState } from "react";

// Font
const DMSans = DM_Sans({ style: ["normal"], subsets: ["latin"] });

interface HomeScreenProps {
  user: User;
  handleSignOut: () => void;
}

const HomeScreen = ({ user, handleSignOut }: HomeScreenProps) => {
  const [fukuPoints, setFukuPoints] = useState("");
  const [loading, setLoading] = useState(false);

  const getDisplayName = (user: User) => {
    if (user && user.displayName)
      return `¡Hola, ${user.displayName.split(" ")[0]}!`;
    return "¡Hola!";
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          // TODO - Change API URL
          `http://3.16.108.75:3000/fukupoints/${user?.uid}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setFukuPoints(jsonData?.fukupoints);
        setLoading(false);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <BaseLayout handleSignOut={handleSignOut}>
      <p
        className={`${DMSans.className} text-fukuro-black font-bold text-2xl mt-6`}
      >
        {getDisplayName(user)}
      </p>
      <PointsContainer points={fukuPoints} loading={loading} />
      <Link href="/create" className="cursor-pointer">
        <Button
          leftIcon={BagIcon}
          text="Llenar una nueva bolsa"
          type="primary"
        />
      </Link>
      <Link href="/deliveryPoints" className="cursor-pointer">
        <Button
          onClick={() => {}}
          leftIcon={HomeIcon}
          text="Puntos de entrega"
        />{" "}
      </Link>
      <Button
        onClick={() => {}}
        leftIcon={InfoIcon}
        text="Informacion"
        className="cursor-pointer"
      />
    </BaseLayout>
  );
};

export default HomeScreen;
