// Next
import localFont from "next/font/local";
import Branding from "../Branding/Branding";

// Font
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });

const LoginScreen = () => {

    return(
        <div className={`relative flex flex-col h-screen w-screen overflow-hidden items-center bg-fukuro-white`}>
            <Branding/>

            <div className={`flex flex-col w-screen bg-fukuro-black`}>

            </div>

        </div>
    )
}
export default LoginScreen;