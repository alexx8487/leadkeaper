import { Member } from "@xxx-shuffle/domain";
import React, { FC } from "react";

import { useProxyValue } from "../../../hooks";
import { MemberForm } from "../../MemberForm";

interface MemberInfoProps {
  member: Member;
  onMemberChange: (data: Member.Update) => void;
}

const MemberInfo: FC<MemberInfoProps> = (props) => {
  const { member, onMemberChange } = props;

  const [localMember, setLocalMember] = useProxyValue(member);

  const handleMemberChange = (data: Member.Update): void => {
    setLocalMember(Member.merge(data));
  };

  const handleFieldSubmit = (field: keyof Member): void => {
    onMemberChange({
      [field]: localMember[field],
    });
  };

  return (
    <MemberForm
      member={localMember}
      onChange={handleMemberChange}
      onFieldSubmit={handleFieldSubmit}
    />
  );
};

export default MemberInfo;
