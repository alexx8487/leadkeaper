import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useIsFocused } from "@react-navigation/native";

import { ScanQRRoute, ScanQRRouteParams } from "./routes";
import {
  ScanResult,
  SubscriptionScanner,
} from "../../../components/SubscriptionScanner";

interface ScannerProps
  extends NativeStackScreenProps<ScanQRRouteParams, ScanQRRoute.Scanner> {}

const Scanner: FC<ScannerProps> = (props) => {
  const { navigation } = props;

  const isFocused = useIsFocused();

  const handleScanFinish = (result: ScanResult) => {
    if (result.type === ScanResult.Type.Exist) {
      navigation.push(ScanQRRoute.Result, { memberId: result.memberId });
    } else {
      navigation.push(ScanQRRoute.Create, { code: result.code });
    }
  };

  return (
    <SubscriptionScanner
      active={isFocused}
      onScanFinish={handleScanFinish}
      allowUsed={true}
    />
  );
};

export default Scanner;
