// Next
import { FC } from "react";

// Components
import Button from "../Button/Button";
import BaseLayout from "../BaseLayout/BaseLayout";

// Fonts
import localFont from "next/font/local";

// Font
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });

// Assets
import googleIcon from "./assets/googleIcon.svg";

interface LoginScreenProps {
  handleSignIn: () => void;
}

const LoginScreen: FC<LoginScreenProps> = ({ handleSignIn }) => {
  const welcomeMessages = ["Te damos", "la bienvenida", "al fukuro"];
  return (
    <BaseLayout>
      <div
        className={`${Phonk.className} justify-center w-full mt-20 animate__animated animate__fadeIn`}
      >
        {welcomeMessages.map((message, index) => (
          <h2
            key={index}
            className={`text-fukuro-black text-[28px] text-center`}
          >
            {message}
          </h2>
        ))}
      </div>
      <Button
        onClick={() => {
          handleSignIn();
        }}
        type="primary"
        className="w-full mt-10 animate__animated animate__fadeInUp"
        text="Ingresar con Google"
        leftIcon={googleIcon}
      />
    </BaseLayout>
  );
};
export default LoginScreen;
