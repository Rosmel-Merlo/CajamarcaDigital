import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";
import { Button } from "@fluentui/react-components";

const BarcodeScanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [barcode, setBarcode] = useState<string | null>(null);
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const videoDevices = devices.filter(
        (device) => device.kind === "videoinput"
      );

      if (videoDevices.length > 0) {
        // Buscar cámara frontal
        const frontCamera = videoDevices.find(
          (device) =>
            device.label.toLowerCase().includes("front") ||
            device.label.toLowerCase().includes("delantera")
        );
        setDeviceId(
          frontCamera ? frontCamera.deviceId : videoDevices[0].deviceId
        );
      } else {
        console.error("No se encontraron cámaras.");
      }
    });
  }, []);

  useEffect(() => {
    if (!deviceId) return;

    const codeReader = new BrowserMultiFormatReader();

    const startScanner = async () => {
      try {
        // Detener cualquier stream previo
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }

        const newStream = await navigator.mediaDevices.getUserMedia({
          video: { deviceId: { exact: deviceId } },
        });

        setStream(newStream);

        if (videoRef.current) {
          videoRef.current.srcObject = newStream;
          videoRef.current.setAttribute("playsinline", "true");

          // Esperar a que el video esté listo
          videoRef.current.onloadedmetadata = () => {
            videoRef.current
              ?.play()
              .catch((err) => console.error("Error al reproducir video:", err));
          };
        }

        codeReader.decodeFromVideoDevice(
          deviceId,
          videoRef.current!,
          (result, err) => {
            if (result) {
              setBarcode(result.getText());
              alert(`Código detectado: ${result.getText()}`);
            }
          }
        );
      } catch (error) {
        console.error("Error al acceder a la cámara:", error);
      }
    };

    startScanner();

    return () => {
      codeReader.reset();
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [deviceId]);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Escáner de Código de Barras</h3>
      <video ref={videoRef} style={{ width: "100%", maxWidth: "400px" }} />
      {barcode && <p>Código detectado: {barcode}</p>}
      <Button onClick={() => setBarcode(null)}>Reiniciar</Button>
    </div>
  );
};

export default BarcodeScanner;
