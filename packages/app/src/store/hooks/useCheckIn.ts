import { MemberId } from "@xxx-shuffle/domain";
import { useCallback } from "react";

import { useCheckInMutation } from "../services/members";

export interface CheckInAPI {
  checkIn(): Promise<void>;
  isCheckInLoading: boolean;
  isCheckedIn: boolean;
}

function useCheckIn(memberId: MemberId): CheckInAPI {
  const [checkInRequest, { isLoading: isCheckInLoading, isSuccess }] =
    useCheckInMutation();

  const checkIn = useCallback(async (): Promise<void> => {
    await checkInRequest(memberId);
  }, [memberId]);

  return {
    checkIn,
    isCheckInLoading,
    isCheckedIn: isSuccess,
  };
}

export default useCheckIn;
