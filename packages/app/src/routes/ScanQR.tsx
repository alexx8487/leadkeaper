import React, { FC } from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { AppRouteParams, AppRoute } from "./routes";
import { ScanQRScreen } from "../screens";

interface ScanQRProps
  extends BottomTabScreenProps<AppRouteParams, AppRoute.ScanQR> {}

const ScanQR: FC<ScanQRProps> = () => {
  return <ScanQRScreen />;
};

export default ScanQR;
