import React, { FC } from "react";
import { MemberId, MemberShortDTO } from "@xxx-shuffle/domain";

import * as Style from "./MemberListItem.styles";
import { getChickByName } from "../Avatar";

export interface MemberListItemProps {
  style?: Style.MemberListItemStyleProp;
  member: MemberShortDTO;
  onPress: (memberId: MemberId) => void;
}

const MemberListItem: FC<MemberListItemProps> = (props) => {
  const { style, member, onPress } = props;

  const handlePress = (): void => {
    onPress(member.id);
  };

  return (
    <Style.Layout style={style} onPress={handlePress}>
      <Style.ListAvatar chickColor={getChickByName(member.name)} />

      <Style.InfoLayout>
        <Style.Name>{member.name}</Style.Name>

        <Style.LessonCount>{member.lessonCount} lessons</Style.LessonCount>
      </Style.InfoLayout>
    </Style.Layout>
  );
};

export default MemberListItem;
