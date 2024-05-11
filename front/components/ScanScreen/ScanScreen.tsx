import ScanFooter from "@/components/ScanFooter/ScanFooter";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import ModalNonRecyclable from "./ModalNonRecyclable";

enum CameraOptions {
  FRONT = 'front',
  BACK = 'back',
}

const facingModeDefault = { exact: "environment" };

interface ScanScreenProps {
  onSuccess: (items: string[]) => void;
}

const ScanScreen = ({ onSuccess }: ScanScreenProps) => {
  const webcamRef = useRef<any>(null);
  const [selectedCamera, setSelectedCamera] = useState(CameraOptions.BACK);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onCapture = async () => {
    setIsLoading(true);
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      // TODO - Change API URL
      fetch('http://localhost:3000/aws/getImageMaterialsv2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageSrc }),
      }).then(res => res.json())
        .then(response => {
          if (response.length > 0) {
            onSuccess(response);
          } else {
            setShowError(true);
          }
        console.log(response);
      }).finally(() => {
        setIsLoading(false);
      });
    }
  };

  const onClickDifferentCamera = () => {
    setSelectedCamera(prev => prev === CameraOptions.FRONT ? CameraOptions.BACK : CameraOptions.FRONT)
  };

  console.log(isLoading);

  return (
    <div>
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
        <ScanFooter onCapture={onCapture} onReverseCamera={onClickDifferentCamera} isDisabled={isLoading} />
      </div>
      {showError && <ModalNonRecyclable onClose={() => setShowError(false)} />}
    </div>
  )
};

export default ScanScreen;