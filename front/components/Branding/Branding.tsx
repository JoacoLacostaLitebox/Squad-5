// Next
import localFont from "next/font/local";

// Font
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });

const Branding = () => (
    <div className="relative h-32 w-32">
        <h1 className={`${Phonk.className} pad text-[26px] text-fukuro-black mb-1/3 w-screen absolute inset-x-0 top-8 left-0`}>
            fukuro
        </h1>
    </div>
);


export default Branding