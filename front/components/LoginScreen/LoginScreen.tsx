// Next
import { FC } from "react";

// Components
import Branding from "../Branding/Branding";
import Button from "../Button/Button";

// Fonts
import localFont from "next/font/local";

// Font
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });

// Assets
import googleIcon from './assets/googleIcon.svg'

interface LoginScreenProps {
    handleSignIn: () => void;
}

const LoginScreen: FC<LoginScreenProps> = ({ handleSignIn }) => {
    const welcomeMessages = ["Te damos", "la bienvenida", "al fukuro"];
    return (
        <div className={`relative flex flex-col overflow-hidden items-center bg-fukuro-white w-full pt-8`}>
            <Branding />
            <div className={`${Phonk.className} justify-center w-full max-w-[251px] mt-20 `}>
                {welcomeMessages.map((message, index) => (
                    <h2 key={index} className={`text-fukuro-black text-[28px] text-center `}>
                        {message}
                    </h2>
                ))}
            </div>
            <Button onClick={() => { handleSignIn() }} type="primary" className="w-full mt-10" text="Ingresar con Google" leftIcon={googleIcon} />
        </div>
    )
}
export default LoginScreen;
