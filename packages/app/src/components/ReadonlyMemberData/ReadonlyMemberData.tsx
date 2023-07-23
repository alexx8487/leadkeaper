import React, { FC, ReactElement } from "react";
import { Member } from "@xxx-shuffle/domain";
import { openURL } from "expo-linking";

import * as Styles from "./ReadonlyMemberData.styles";

export interface ReadonlyMemberDataProps {
  style?: Styles.ReadonlyMemberDataStyleProp;
  member: Member;
}

const ReadonlyMemberData: FC<ReadonlyMemberDataProps> = (props) => {
  const { style, member } = props;

  const handlePhonePress = (): void => {
    openURL(`tel:${member.phone}`);
  };

  const handleEmailPress = (): void => {
    openURL(`mailto:${member.email}`);
  };

  const fields: ReactElement[] = [];

  if (member.phone) {
    fields.push(
      <Styles.Field
        key="phone"
        label="Phone"
        value={member.phone}
        onPress={handlePhonePress}
      />
    );
  }

  if (member.email) {
    fields.push(
      <Styles.Field
        key="email"
        label="Email"
        value={member.email}
        onPress={handleEmailPress}
      />
    );
  }

  if (fields.length === 0) {
    return null;
  }

  return <Styles.Layout style={style}>{fields}</Styles.Layout>;
};

export default ReadonlyMemberData;
