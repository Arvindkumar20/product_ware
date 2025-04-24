// components/FaceCapture.jsx
import React, { useRef, useState } from 'react';

export default function FaceCapture({ onCapture }) {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing webcam:", err));
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const image = canvas.toDataURL('image/png');
    setCapturedImage(image);
    onCapture(image); // send image to parent
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <video ref={videoRef} autoPlay className="rounded-lg shadow-lg w-[300px] h-[300px]" />
      <div className="flex gap-4">
        <button onClick={startCamera} className="px-4 py-2 bg-blue-600 text-white rounded">Start Camera</button>
        <button onClick={captureImage} className="px-4 py-2 bg-green-600 text-white rounded">Capture</button>
      </div>
      {capturedImage && (
        <img src={capturedImage} alt="Captured" className="mt-4 rounded-lg shadow-md w-[300px]" />
      )}
    </div>
  );
}
