import React, { FC } from "react";
import { Member, Subscription } from "@xxx-shuffle/domain";

import { MemberInfo } from "./MemberInfo";
import { SubscriptionInfo } from "./SubscriptionInfo";
import * as Styles from "./MemberCard.styles";

export interface MemberCardProps {
  member: Member;
  onMemberChange: (data: Member.Update) => void;
}

const MemberCard: FC<MemberCardProps> = (props) => {
  const { member, onMemberChange } = props;

  const handleSubscriptionChange = (data: Subscription.Update) => {
    if (member.subscription) {
      onMemberChange({
        subscription: Subscription.merge(data)(member.subscription),
      });
    }
  };

  return (
    <Styles.Container>
      <Styles.Title>Member</Styles.Title>

      <MemberInfo member={member} onMemberChange={onMemberChange} />

      {member.subscription !== undefined ? (
        <SubscriptionInfo
          subscription={member.subscription}
          onChange={handleSubscriptionChange}
        />
      ) : (
        <Styles.NoSubscriptionsText>No subscription</Styles.NoSubscriptionsText>
      )}
    </Styles.Container>
  );
};

export default MemberCard;
