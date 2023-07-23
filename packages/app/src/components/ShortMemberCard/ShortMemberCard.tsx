import React, { FC } from "react";
import { Member } from "@xxx-shuffle/domain";

import * as Styles from "./ShortMemberCard.styles";

export interface ShortMemberCardProps {
  style?: Styles.ShortMemberCardStyleProp;
  member: Member;
  onCheckIn: () => void;
  isCheckedIn: boolean;
}

const ShortMemberCard: FC<ShortMemberCardProps> = (props) => {
  const { style, member, onCheckIn, isCheckedIn } = props;

  return (
    <Styles.Layout style={style}>
      <Styles.Member member={member} short />

      {!isCheckedIn && member.subscription?.lessonCount !== 0 && (
        <Styles.CheckInButton
          type="primary"
          label="Check in"
          onPress={onCheckIn}
        />
      )}

      {isCheckedIn && (
        <Styles.SuccessText>Successfully checked in</Styles.SuccessText>
      )}
    </Styles.Layout>
  );
};

export default ShortMemberCard;
