import { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

export default function Scan() {
  const [scanResult, setScanResult] = useState('');
  const videoRef = useRef(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    codeReader
      .listVideoDevices()
      .then((videoDevices) => {
        const selectedDeviceId = videoDevices[0].deviceId;
        codeReader
          .decodeFromVideoDevice(selectedDeviceId, videoRef.current, (result, err) => {
            if (result) {
              setScanResult(result.getText());
            }
            if (err) {
              console.error(err);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      codeReader.reset();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Scan QR Code
        </h2>

        <video ref={videoRef} width="100%" height="auto" />

        {scanResult && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-200">
              Scanned Result: <strong>{scanResult}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
