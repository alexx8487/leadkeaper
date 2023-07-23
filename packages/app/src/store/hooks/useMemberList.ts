import { Member, MemberCreateDTO, MemberShortDTO } from "@xxx-shuffle/domain";
import { useCallback, useState } from "react";

import {
  useCreateMemberMutation,
  useGetMemberListQuery,
} from "../services/members";

interface MemberListAPI {
  data: MemberShortDTO[];
  isLoading: boolean;
  isFetching: boolean;
  create(data: Member): Promise<void>;
  isCreateLoading: boolean;
  searchString: string;
  setSearchString: (searchString: string) => void;
  refetch(): void;
}

function useMemberList(): MemberListAPI {
  const { data = [], isLoading, isFetching, refetch } = useGetMemberListQuery();

  const [searchString, setSearchString] = useState("");

  const [createMember, { isLoading: isCreateLoading }] =
    useCreateMemberMutation();

  const create = useCallback(
    async (data: Member): Promise<void> => {
      const createDTO = MemberCreateDTO.fromMember(data);

      if (createDTO !== undefined) {
        await createMember(createDTO);
      }
    },
    [createMember]
  );

  const filteredList = data.filter(({ name }) =>
    name.toLowerCase().includes(searchString.toLowerCase())
  );

  return {
    data: filteredList,
    isLoading,
    isFetching,
    create,
    isCreateLoading,
    searchString,
    setSearchString,
    refetch,
  };
}

export default useMemberList;
