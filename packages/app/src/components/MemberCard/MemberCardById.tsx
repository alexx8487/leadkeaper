import React, { FC } from "react";
import { Text } from "react-native";
import { Member, MemberId, MemberUpdateDTO } from "@xxx-shuffle/domain";

import {
  useGetMemberByIdQuery,
  useUpdateMemberMutation,
} from "../../store/services/members";
import { FullScreenLoader } from "../FullScreenLoader";
import MemberCard from "./MemberCard";

export interface MemberCardByIdProps {
  memberId: MemberId;
}

const MemberCardById: FC<MemberCardByIdProps> = (props) => {
  const { memberId } = props;

  const { data, isLoading } = useGetMemberByIdQuery(memberId);

  const [updateMember] = useUpdateMemberMutation();

  const handleMemberChange = (data: Member.Update): void => {
    const updateDTO = MemberUpdateDTO.create(memberId, data);

    if (updateDTO) {
      updateMember(updateDTO);
    }
  };

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (data === undefined) {
    return <Text>User does not exist</Text>;
  }

  return <MemberCard member={data} onMemberChange={handleMemberChange} />;
};

export default MemberCardById;
