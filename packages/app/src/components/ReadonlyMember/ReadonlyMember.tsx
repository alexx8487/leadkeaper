import React, { FC } from "react";
import { Member } from "@xxx-shuffle/domain";

import { getChickByName } from "../Avatar";
import { useShakeAnimation } from "../../utils";
import * as Styles from "./ReadonlyMember.styles";

interface ReadonlyMemberProps {
  style?: Styles.ReadonlyMemberStyleProp;
  member: Member;
  short?: boolean;
}

const ReadonlyMember: FC<ReadonlyMemberProps> = (props) => {
  const { style, member, short } = props;

  return (
    <Styles.Layout style={style}>
      <Styles.MemberAvatar
        chickColor={getChickByName(member.name)}
        isAnimated
      />

      <Styles.Name>{member.name}</Styles.Name>

      {!short && <Styles.Member member={member} />}

      {member.subscription && (
        <Styles.Subscription subscription={member.subscription} />
      )}
    </Styles.Layout>
  );
};

export default ReadonlyMember;
