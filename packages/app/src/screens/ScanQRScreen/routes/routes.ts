import { MemberId } from "@xxx-shuffle/domain";

import { QRCodeData } from "../../../domain";

export enum ScanQRRoute {
  Scanner = "Scanner",
  Result = "Scan result",
  Create = "Create member",
  Edit = "Edit",
}

export type ScanQRRouteParams = {
  [ScanQRRoute.Scanner]: undefined;
  [ScanQRRoute.Result]: {
    memberId: MemberId;
  };
  [ScanQRRoute.Create]: {
    code: QRCodeData;
  };
  [ScanQRRoute.Edit]: {
    id: MemberId;
  };
};
