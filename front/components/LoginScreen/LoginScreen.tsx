// Next
import localFont from "next/font/local";
import Branding from "../Branding/Branding";
import Footer from "../Footer/Footer";

// Font
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });

const LoginScreen = () => {
    const welcomeMessages = ["Te damos", "la bienvenida", "al fukuro"];

    return (
        <div className={`relative flex flex-col h-screen overflow-hidden items-center bg-fukuro-white w-full`}>
            <Branding />

            <div className={`${Phonk.className} justify-center w-full max-w-[251px]`}>
                {welcomeMessages.map((message, index) => (
                    <h2 key={index} className={`text-fukuro-black text-[28px] text-center`}>
                        {message}
                    </h2>
                ))}
            </div>

            <div>
                
            </div>
            <div className={'absolute inset-x-0 bottom-[80px] h-16'} >
                <Footer />
            </div>

        </div>
    )
}
export default LoginScreen;