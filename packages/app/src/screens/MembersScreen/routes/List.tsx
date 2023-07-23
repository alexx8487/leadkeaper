import React, { FC, useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MemberId } from "@xxx-shuffle/domain";

import { MembersRoute, MembersRouteParams } from "./routes";
import { FullScreenLoader, MemberList } from "../../../components";
import { useMemberList } from "../../../store/hooks";

interface ListProps
  extends NativeStackScreenProps<MembersRouteParams, MembersRoute.List> {}

const List: FC<ListProps> = (props) => {
  const { navigation } = props;

  const { data, isLoading, setSearchString } = useMemberList();

  useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: (event) => setSearchString(event.nativeEvent.text),
      },
    });
  }, [navigation, setSearchString]);

  const handleMemberSelect = (id: MemberId) => {
    navigation.push(MembersRoute.View, { id });
  };

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <MemberList
      members={data}
      onMemberSelect={handleMemberSelect}
      style={{ height: "100%" }}
    />
  );
};

export default List;
