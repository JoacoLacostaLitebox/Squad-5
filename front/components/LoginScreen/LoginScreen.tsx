// Components
import Branding from "../Branding/Branding";
import Footer from "../Footer/Footer";
import BottomDecoration from "../BottomDecoration/BottomDecoration";
import Button from "../Button/Button";

// Fonts
import localFont from "next/font/local";

// Context
import { useAuth } from "@/context/AuthContext";

// Font
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });

// Assets
import googleIcon from './assets/googleIcon.svg'

const LoginScreen = () => {
    const { googleSignIn } = useAuth();
    const welcomeMessages = ["Te damos", "la bienvenida", "al fukuro"];

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={`relative flex flex-col h-screen overflow-hidden items-center bg-fukuro-white w-full`}>
            <Branding />
            <div className={`${Phonk.className} justify-center w-full max-w-[251px] `}>
                {welcomeMessages.map((message, index) => (
                    <h2 key={index} className={`text-fukuro-black text-[28px] text-center`}>
                        {message}
                    </h2>
                ))}
            </div>

            <div>
                <Button onClick={() => { handleSignIn() }} text="Ingresar con Google" leftIcon={googleIcon} />

            </div>
            <BottomDecoration />
            <div className={'absolute inset-x-0 bottom-[80px] h-16'} >
                <Footer />
            </div>

        </div>
    )
}
export default LoginScreen;
