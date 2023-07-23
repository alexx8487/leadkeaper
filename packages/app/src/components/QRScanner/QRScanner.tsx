import React, { FC, useEffect, useState } from "react";
import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import {
  BarCodeScannedCallback,
  BarCodeScanner,
  BarCodeScannerResult,
} from "expo-barcode-scanner";

import useQRScannerPermission from "./useQRScannerPermission";
import { useCallbackRef } from "../../hooks";
import * as Styles from "./QRScanner.styles";

const BAR_CODE_TYPES = [BarCodeScanner.Constants.BarCodeType.qr];

interface QRScannerProps {
  style?: StyleProp<ViewStyle>;
  active: boolean;
  onScanFinish: (data: string) => void;
}

const QRScanner: FC<QRScannerProps> = (props) => {
  const { style, onScanFinish, active } = props;

  const hasPermission = useQRScannerPermission();

  const scanFinishRef = useCallbackRef(onScanFinish);

  const [result, setResult] = useState<BarCodeScannerResult | undefined>(
    undefined
  );

  useEffect(() => {
    if (result !== undefined) {
      const timer = setTimeout(() => {
        setResult(undefined);
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [result]);

  const data = result?.data;

  useEffect(() => {
    if (data !== undefined) {
      scanFinishRef.current(data);
    }
  }, [data, scanFinishRef]);

  const handleBarCodeScanned: BarCodeScannedCallback = (result) => {
    setResult(result);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Styles.Layout style={style}>
      <Styles.Scanner
        onBarCodeScanned={active ? handleBarCodeScanned : undefined}
        barCodeTypes={BAR_CODE_TYPES}
      />

      {/* <TouchableOpacity
        style={{
          position: "absolute",
          left: 50,
          top: 50,
        }}
        onPress={() => onScanFinish("10")}
      >
        <Text style={{ color: "#ff0000" }}>Mock 10</Text>
      </TouchableOpacity> */}

      {result?.bounds && (
        <Styles.ResultFrame
          style={{
            top: result.bounds.origin.y,
            left: result.bounds.origin.x,
            width: result.bounds.size.width,
            height: result.bounds.size.height,
          }}
        />
      )}
    </Styles.Layout>
  );
};

export default QRScanner;
