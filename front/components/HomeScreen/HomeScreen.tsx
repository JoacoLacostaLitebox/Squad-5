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

// Font
const DMSans = DM_Sans({ style: ["normal"], subsets: ["latin"] });

interface HomeScreenProps {
  user: User;
  handleSignOut: () => void;
}

const HomeScreen = ({ user, handleSignOut }: HomeScreenProps) => {
  const getDisplayName = (user: User) => {
    if (user && user.displayName)
      return `¡Hola, ${user.displayName.split(" ")[0]}!`;
    return "¡Hola!";
  };

  return (
    <BaseLayout handleSignOut={handleSignOut}>
      <p
        className={`${DMSans.className} text-fukuro-black font-bold text-2xl mt-6`}
      >
        {getDisplayName(user)}
      </p>
      <PointsContainer points={374930} />
      <Link href="/create">
        <Button
          leftIcon={BagIcon}
          text="Llenar una bolsa nueva"
          type="primary"
          className="w-full"
        />
      </Link>
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
    </BaseLayout>
  );
};

export default HomeScreen;
