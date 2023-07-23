import React, { FC, useEffect, useState } from "react";
import { Button, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Member,
  PartialMember,
  PartialSubscription,
} from "@xxx-shuffle/domain";

import { ScanQRRoute, ScanQRRouteParams } from "./routes";
import { useMemberList } from "../../../store/hooks";
import { EditableMember } from "../../../components/EditableMember";

interface CreateProps
  extends NativeStackScreenProps<ScanQRRouteParams, ScanQRRoute.Create> {}

const Create: FC<CreateProps> = (props) => {
  const { route, navigation } = props;

  const { code } = route.params;

  const { create } = useMemberList();

  const [member, setMember] = useState(
    PartialMember.create(
      undefined,
      undefined,
      undefined,
      PartialSubscription.create(code)
    )
  );

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        const handleCreate = (): void => {
          if (PartialMember.isFilled(member) && Member.isValid(member)) {
            navigation.pop();
            create(member);
          }
        };

        return (
          <Button
            onPress={handleCreate}
            disabled={
              !PartialMember.isFilled(member) || !Member.isValid(member)
            }
            title="Create"
          />
        );
      },
    });
  }, [navigation, create, member]);

  return (
    <ScrollView>
      <EditableMember
        member={member}
        onMemberChange={setMember}
        style={{ marginTop: 16, marginBottom: 200 }}
      />
    </ScrollView>
  );
};

export default Create;
