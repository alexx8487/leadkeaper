import React, { FC } from "react";
import { ListRenderItem } from "react-native";
import { MemberId, MemberShortDTO } from "@xxx-shuffle/domain";

import { Divider } from "../Divider";
import * as Styles from "./MemberList.styles";

interface ListSectionProps {
  style?: Styles.MemberListStyleProp;
  members: MemberShortDTO[];
  onMemberSelect: (id: MemberId) => void;
  onRefresh?: () => void;
  refreshing?: boolean;
}

const MemberList: FC<ListSectionProps> = (props) => {
  const { style, members, onMemberSelect, onRefresh, refreshing } = props;

  const renderMember: ListRenderItem<MemberShortDTO> = ({ item }) => {
    return <Styles.Item key={item.id} member={item} onPress={onMemberSelect} />;
  };

  return (
    <Styles.List
      style={style}
      data={members}
      renderItem={renderMember as ListRenderItem<unknown>}
      ItemSeparatorComponent={Divider}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
};

export default MemberList;
