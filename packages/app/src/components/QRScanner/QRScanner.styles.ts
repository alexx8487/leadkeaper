import { BarCodeScanner } from "expo-barcode-scanner";
import styled from "styled-components/native";

export const Layout = styled.View`
  position: relative;
`;

export const Scanner = styled(BarCodeScanner)`
  /** Layout styles */
  height: 100%;
  width: 100%;
`;

export const ResultFrame = styled.View`
  border: solid 4px #00d900;
  border-radius: 16px;

  /** Layout styles */
  position: absolute;
`;
