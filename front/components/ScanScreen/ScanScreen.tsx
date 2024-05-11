import ScanFooter from "@/components/ScanFooter/ScanFooter";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

enum CameraOptions {
  FRONT = 'front',
  BACK = 'back',
}

const facingModeDefault = { exact: "environment" };

const ScanScreen: React.FC = () => {
  const webcamRef = useRef<any>(null);
  const [selectedCamera, setSelectedCamera] = useState(CameraOptions.BACK);

  const onCapture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      // TODO - Change API URL
      fetch('http://localhost:3000/aws/getImageMaterialsv2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageSrc }),
      }).then((res) => {
        console.log(res);
      });
    }
  };

  const onClickDifferentCamera = () => {
    setSelectedCamera(prev => prev === CameraOptions.FRONT ? CameraOptions.BACK : CameraOptions.FRONT)
  };  

  return (
    <div className="flex h-screen flex-col" style={{ background: 'black' }}>
      <div className="absolute inset-0" style={{ height: 'calc(100vh - 148px)' }}>
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          audio={false}
          videoConstraints={{
            aspectRatio: 3 / 4,
            facingMode: selectedCamera === CameraOptions.FRONT
              ? 'user'
              : facingModeDefault
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <ScanFooter onCapture={onCapture} onReverseCamera={onClickDifferentCamera} />
    </div>
  )
};

export default ScanScreen;