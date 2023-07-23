import { useEffect, useState } from "react";

import { QRCodeData } from "../../domain";
import { useCallbackRef } from "../../hooks";
import { useGetMemberSubscriptionByCodeMutation } from "../../store/services/members";
import ScanError from "./ScanError";
import ScanResult from "./ScanResult";

export interface UseSubscriptionScannerProps {
  allowUsed: boolean;
  onScanFinish: (result: ScanResult) => void;
}

export interface SubscriptionScannerAPI {
  error: ScanError | undefined;
  closeError(): void;
  onScanFinish(data: string): void;
}

function useSubscriptionScanner(
  props: UseSubscriptionScannerProps
): SubscriptionScannerAPI {
  const { allowUsed, onScanFinish } = props;

  const onScanFinishRef = useCallbackRef(onScanFinish);
  const [error, setError] = useState<ScanError | undefined>(undefined);
  const [code, setCode] = useState<QRCodeData | undefined>(undefined);
  const [query] = useGetMemberSubscriptionByCodeMutation();

  useEffect(() => {
    if (code === undefined) {
      return;
    }

    query(code).then((response) => {
      if ("data" in response) {
        if (allowUsed) {
          onScanFinishRef.current(
            ScanResult.createExistResult(response.data.id)
          );
        } else {
          setError(ScanError.Used);
        }
      } else {
        onScanFinishRef.current(ScanResult.createNotExistResult(code));
      }

      setCode(undefined);
    });
  }, [allowUsed, onScanFinishRef, code, query]);

  const handleScanFinish = (data: string) => {
    const code = QRCodeData.parse(data);

    if (code !== undefined) {
      setCode(code);
    } else {
      setError(ScanError.Invalid);
    }
  };

  const closeError = (): void => {
    setError(undefined);
  };

  return {
    error,
    closeError,
    onScanFinish: handleScanFinish,
  };
}

export default useSubscriptionScanner;
