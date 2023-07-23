import React, { FC } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

import ScanError from "./ScanError";
import useSubscriptionScanner, {
  UseSubscriptionScannerProps,
} from "./useSubscriptionScanner";
import * as Styles from "./SubscriptionScanner.styles";
// import { Button } from "../Button";

interface SubscriptionScannerProps extends UseSubscriptionScannerProps {
  style?: StyleProp<ViewStyle>;
  active: boolean;
}

const SubscriptionScanner: FC<SubscriptionScannerProps> = (props) => {
  const { style, active } = props;

  const scannerAPI = useSubscriptionScanner(props);

  return (
    <View style={style}>
      <Styles.Scanner active={active} onScanFinish={scannerAPI.onScanFinish} />
      {/* 
      <Button
        type="secondary"
        label="QR 5"
        onPress={() => {
          scannerAPI.onScanFinish("5");
        }}
        style={{ position: "absolute", top: 20, backgroundColor: "white" }}
      />

      <Button
        type="secondary"
        label="QR 10"
        onPress={() => {
          scannerAPI.onScanFinish("10");
        }}
        style={{ position: "absolute", top: 80, backgroundColor: "white" }}
      /> */}

      {scannerAPI.error !== undefined && (
        <Styles.ScanError
          message={ScanError.getMessage(scannerAPI.error)}
          showDuration={3000}
          onClose={scannerAPI.closeError}
        />
      )}
    </View>
  );
};

export default SubscriptionScanner;
