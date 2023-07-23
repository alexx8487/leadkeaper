import React, { FC, useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, ScrollView } from "react-native";
import { Member, PartialMember } from "@xxx-shuffle/domain";

import { MembersRoute, MembersRouteParams } from "./routes";
import { useMemberList } from "../../../store/hooks";
import { EditableMember } from "../../../components/EditableMember";

interface CreateProps
  extends NativeStackScreenProps<MembersRouteParams, MembersRoute.Create> {}

const Create: FC<CreateProps> = (props) => {
  const { navigation } = props;

  const { create } = useMemberList();

  const [member, setMember] = useState(PartialMember.create());

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
    <ScrollView keyboardDismissMode="on-drag">
      <EditableMember
        member={member}
        onMemberChange={setMember}
        style={{ marginTop: 16, marginBottom: 200 }}
      />
    </ScrollView>
  );
};

export default Create;
