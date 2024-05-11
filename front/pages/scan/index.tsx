// Next
import React, { useState } from "react";
import ScanScreen from "../../components/ScanScreen/ScanScreen";

// Components
import BaseLayout from "@/components/BaseLayout/BaseLayout";
import SuccessScreen from "@/components/SuccessScreen/SuccessScreen";

const Scan = () => {
  const [scannedItems, setScannedItems] = useState<string[]>([]);
  const [isScanning, setIsScanning] = useState(true);
  
  const onFinishScan = (items: string[]) => {
    setScannedItems([...scannedItems, items[0]]);
    setIsScanning(false);
  }

  if (isScanning)
    return (
      <ScanScreen onSuccess={onFinishScan} />
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
