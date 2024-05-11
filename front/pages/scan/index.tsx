// Next
import localFont from "next/font/local";
import React, { useState } from "react";

// Components
import BaseLayout from "@/components/BaseLayout/BaseLayout";
import SuccessScreen from "@/components/SuccessScreen/SuccessScreen";

const Scan = () => {
  const [scannedItems, setScannedItems] = useState([]);
  const [isScanning, setIsScanning] = useState(true);

  if (isScanning)
    return (
      <div className="relative h-screen w-screen bg-black">
        <div className="flex items-center justify-center w-full h-[168px] bg-fukuro-white rounded-t-xl absolute bottom-0">
          <button onClick={() => setIsScanning(false)}>
            <div className="flex rounded-full w-[72px] h-[72px] bg-fukuro-orange/50 items-center justify-center">
              <div className="rounded-full w-10 h-10 bg-fukuro-orange"></div>
            </div>
          </button>
        </div>
      </div>
    );
  return (
    <BaseLayout noBottomDecoration>
      <SuccessScreen
        onLoadMore={() => setIsScanning(true)}
        scannedItems={scannedItems}
      />
    </BaseLayout>
  );
};

export default Scan;
