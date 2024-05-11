// Next
import localFont from "next/font/local";

// Font
const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });

const Branding = () => (
  <div className="relative flex h-fit w-fit">
    <h1
      className={`${Phonk.className} pad text-[26px] text-fukuro-black mb-1/3`}
    >
      fukuro
    </h1>
  </div>
);

export default Branding;
