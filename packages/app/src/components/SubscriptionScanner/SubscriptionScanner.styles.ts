import styled from "styled-components/native";

import { ErrorView } from "../ErrorView";
import { QRScanner } from "../QRScanner";

export const Scanner = styled(QRScanner)`
  height: 100%;
`;

export const ScanError = styled(ErrorView)`
  position: absolute;
  bottom: 20px;
  left: 15px;
  right: 15px;
`;
