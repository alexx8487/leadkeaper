import { MemberId } from "@xxx-shuffle/domain";

import { QRCodeData } from "../../domain";

type ScanResult =
  | { type: ScanResult.Type.Exist; memberId: MemberId }
  | { type: ScanResult.Type.NotExist; code: QRCodeData };

namespace ScanResult {
  export enum Type {
    Exist,
    NotExist,
  }

  export function createExistResult(memberId: MemberId): ScanResult {
    return {
      type: Type.Exist,
      memberId,
    };
  }

  export function createNotExistResult(code: QRCodeData): ScanResult {
    return {
      type: Type.NotExist,
      code,
    };
  }
}

export default ScanResult;
