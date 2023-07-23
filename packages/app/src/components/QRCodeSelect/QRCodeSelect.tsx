import React, { FC, useState } from "react";
import { Modal, TouchableOpacity, Text } from "react-native";

import { QRCodeData } from "../../domain";
import { SelectField, SelectFieldStyleProp } from "../SelectField";
import { ScanResult, SubscriptionScanner } from "../SubscriptionScanner";
import * as Styles from "./QRCodeSelect.styles";

export interface QRCodeSelectProps {
  style?: SelectFieldStyleProp;
  code: QRCodeData | undefined;
  onCodeSelect: (code: QRCodeData) => void;
}

const QRCodeSelect: FC<QRCodeSelectProps> = (props) => {
  const { style, code = "None", onCodeSelect } = props;

  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const openScanner = (): void => setIsScannerOpen(true);

  const closeScanner = (): void => setIsScannerOpen(false);

  const handleScan = (result: ScanResult): void => {
    if (result.type === ScanResult.Type.NotExist) {
      onCodeSelect(result.code);
      closeScanner();
    }
  };

  return (
    <>
      <SelectField
        style={style}
        label="QR code"
        value={code}
        onPress={openScanner}
      />

      <Modal
        animationType="fade"
        visible={isScannerOpen}
        onDismiss={closeScanner}
      >
        <SubscriptionScanner
          active={isScannerOpen}
          allowUsed={false}
          onScanFinish={handleScan}
        />
        <Styles.CloseButton onPress={closeScanner}>
          <Styles.CloseButtonText>Cancel</Styles.CloseButtonText>
        </Styles.CloseButton>
      </Modal>
    </>
  );
};

export default QRCodeSelect;
