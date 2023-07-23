import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";

function useQRScannerPermission(): boolean | null {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return hasPermission;
}

export default useQRScannerPermission;
