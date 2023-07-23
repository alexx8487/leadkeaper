import React, { FC } from "react";
import { PartialMember, PartialSubscription } from "@xxx-shuffle/domain";

import * as Styles from "./EditableMember.styles";

export interface EditableMemberProps {
  style?: Styles.EditableMemberStyleProp;
  member: PartialMember;
  onMemberChange: (member: PartialMember) => void;
  onMemberDelete?: () => void;
}

const EditableMember: FC<EditableMemberProps> = (props) => {
  const { style, member, onMemberChange, onMemberDelete } = props;

  const handleSubscriptionChange = (
    subscription: PartialSubscription
  ): void => {
    onMemberChange(PartialMember.set("subscription", subscription)(member));
  };

  return (
    <Styles.Layout style={style}>
      <Styles.Member member={member} onMemberChange={onMemberChange} />

      <Styles.Subscription
        subscription={member.subscription}
        onSubscriptionChange={handleSubscriptionChange}
      />

      {onMemberDelete && (
        <Styles.DeleteButton
          type="dangerous"
          confirmationText="Do you want to delete member?"
          label="Delete member"
          onPress={onMemberDelete}
        />
      )}
    </Styles.Layout>
  );
};

export default EditableMember;
