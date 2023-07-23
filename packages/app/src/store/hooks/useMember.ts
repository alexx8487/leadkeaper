import {
  MemberDTO,
  MemberId,
  MemberUpdateDTO,
  PartialMember,
} from "@xxx-shuffle/domain";
import { useCallback } from "react";

import {
  useDeleteMemberMutation,
  useGetMemberByIdQuery,
  useUpdateMemberMutation,
} from "../services/members";
import useCheckIn, { CheckInAPI } from "./useCheckIn";

interface MemberAPI extends CheckInAPI {
  data: MemberDTO | undefined;
  isLoading: boolean;
  update(data: PartialMember): Promise<void>;
  isUpdateLoading: boolean;
  remove(): Promise<void>;
  isDeleteLoading: boolean;
}

function useMember(id: MemberId): MemberAPI {
  const checkInAPI = useCheckIn(id);

  const { data, isLoading } = useGetMemberByIdQuery(id);

  const [updateMember, { isLoading: isUpdateLoading }] =
    useUpdateMemberMutation();

  const [removeMember, { isLoading: isDeleteLoading }] =
    useDeleteMemberMutation();

  const update = useCallback(
    async (data: PartialMember): Promise<void> => {
      const updateDTO = MemberUpdateDTO.fromPartialMember(id, data);

      if (updateDTO !== undefined) {
        await updateMember(updateDTO);
      }
    },
    [id, updateMember]
  );

  const remove = useCallback(async (): Promise<void> => {
    await removeMember(id);
  }, [id, removeMember]);

  return {
    ...checkInAPI,
    data,
    isLoading,
    update,
    isUpdateLoading,
    remove,
    isDeleteLoading,
  };
}

export default useMember;
