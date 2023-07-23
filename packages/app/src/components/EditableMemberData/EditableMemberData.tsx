import React, { FC } from "react";
import { PartialMember } from "@xxx-shuffle/domain";

import * as Styles from "./EditableMemberData.styles";

export interface EditableMemberDataProps {
  style?: Styles.EditableMemberDataStyleProp;
  member: PartialMember;
  onMemberChange: (member: PartialMember) => void;
}

const EditableMemberData: FC<EditableMemberDataProps> = (props) => {
  const { style, member, onMemberChange } = props;

  const handleNameChange = (name: string): void => {
    onMemberChange(PartialMember.set("name", name)(member));
  };

  const handlePhoneChange = (phone: string): void => {
    onMemberChange(PartialMember.set("phone", phone)(member));
  };

  const handleEmailChange = (email: string): void => {
    onMemberChange(PartialMember.set("email", email)(member));
  };

  return (
    <Styles.Layout style={style}>
      <Styles.Field
        label="Name"
        value={member.name}
        onValueChange={handleNameChange}
        placeholder="Ivanov Ivan"
      />

      <Styles.Field
        label="Phone"
        value={member.phone}
        onValueChange={handlePhoneChange}
        placeholder="8(987)654-32-10"
        keyboardType="phone-pad"
      />

      {/* <Styles.Field
        label="Email"
        value={member.email}
        onValueChange={handleEmailChange}
        placeholder="ivanov.ivan@example.com"
        keyboardType="email-address"
      /> */}
    </Styles.Layout>
  );
};

export default EditableMemberData;
