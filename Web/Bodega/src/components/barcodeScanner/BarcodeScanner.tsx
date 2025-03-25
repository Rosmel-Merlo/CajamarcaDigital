import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader, Exception, Result } from "@zxing/library";
import {
  Button,
  List,
  ListItem,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  Text,
} from "@fluentui/react-components";
import { MessagerBarComponent } from "../messagerBar/MessagerBarComponent";

interface IBarcodeScanner {
  onchange: (data: Result, error?: Exception) => void;
}

const BarcodeScanner = (props: IBarcodeScanner) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<
    "granted" | "denied" | "prompt" | null
  >(null);

  useEffect(() => {
    navigator.permissions
      .query({ name: "camera" as PermissionName })
      .then((result) => {
        setPermissionStatus(result.state);
        result.onchange = () => setPermissionStatus(result.state);
      })
      .catch(() => setPermissionStatus("denied"));
  }, []);

  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach((track) => track.stop()); // Cerramos el stream después de conceder permiso
      setPermissionStatus("granted");
    } catch (error) {
      console.error("Permiso denegado:", error);
      setPermissionStatus("denied");
    }
  };

  useEffect(() => {
    if (permissionStatus !== "granted") return;

    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const videoDevices = devices.filter(
        (device) => device.kind === "videoinput"
      );

      if (videoDevices.length > 0) {
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
  }, [permissionStatus]);

  // Inicializar escaneo
  useEffect(() => {
    if (!deviceId || permissionStatus !== "granted") return;

    const codeReader = new BrowserMultiFormatReader();

    const startScanner = async () => {
      try {
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

          videoRef.current.onloadedmetadata = () => {
            videoRef.current
              ?.play()
              .catch((err) => console.error("Error al reproducir video:", err));
          };
        }

        codeReader.decodeFromVideoDevice(
          deviceId,
          videoRef.current!,
          props.onchange
          /*  (result, err) => {
            if (result) {
              setBarcode(result.getText());
            }
          } */
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
  }, [deviceId, permissionStatus]);

  return (
    <div style={{ textAlign: "center" }}>
      {permissionStatus === "denied" ? (
        <div>
          <MessagerBarComponent
            intent="error"
            message="⚠ Acceso a la cámara denegado. Habilítalo en la configuración del
            navegador."
          />
          <div style={{ marginTop: "20px" }}>
            <Button onClick={requestCameraPermission}>
              Intentar nuevamente
            </Button>

            <Popover>
              <PopoverTrigger>
                <Button style={{ marginLeft: "10px" }}>
                  Ir a configuración
                </Button>
              </PopoverTrigger>
              <PopoverSurface tabIndex={-1}>
                <List>
                  <ListItem>
                    <Text>
                      1. Haz clic en el ícono 🔒 en la barra de direcciones.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      2. Ve a "Configuración del sitio". En "Permisos",
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>3. busca "Cámara" y selecciona "Permitir". </Text>
                  </ListItem>
                </List>
              </PopoverSurface>
            </Popover>
          </div>
        </div>
      ) : permissionStatus === "prompt" ? (
        <div>
          <MessagerBarComponent
            intent="warning"
            message="🔔 Se necesita permiso para acceder a la cámara."
          />
          <Button onClick={requestCameraPermission}>Solicitar Permiso</Button>
        </div>
      ) : (
        <>
          <video ref={videoRef} style={{ width: "100%", maxWidth: "400px" }} />
        </>
      )}
    </div>
  );
};

export default BarcodeScanner;
