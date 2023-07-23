import React, { FC, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text } from "react-native";

import { MembersRoute, MembersRouteParams } from "./routes";
import { FullScreenLoader, MemberCard } from "../../../components";
import { useMember } from "../../../store/hooks";
import { ReadonlyMember } from "../../../components/ReadonlyMember";

interface ByIdProps
  extends NativeStackScreenProps<MembersRouteParams, MembersRoute.View> {}

const ById: FC<ByIdProps> = (props) => {
  const { route, navigation } = props;

  const { id } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        const handleEditClick = (): void => {
          navigation.push(MembersRoute.Edit, { id });
        };

        return <Button onPress={handleEditClick} title="Edit" />;
      },
    });
  }, [navigation, id]);

  const { data, isLoading, isUpdateLoading } = useMember(id);

  if (isLoading || isUpdateLoading) {
    return <FullScreenLoader />;
  }

  if (data === undefined) {
    return <Text>Member does not exist</Text>;
  }

  return (
    <ReadonlyMember
      member={data}
      style={{ padding: 16, backgroundColor: "#F2F2F7" }}
    />
  );
};

export default ById;
