import React, { FC, useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, ScrollView } from "react-native";
import { Member, PartialMember } from "@xxx-shuffle/domain";

import { MembersRoute, MembersRouteParams } from "./routes";
import { useMember } from "../../../store/hooks";
import { EditableMember } from "../../../components/EditableMember";

interface EditProps
  extends NativeStackScreenProps<MembersRouteParams, MembersRoute.Edit> {}

const Edit: FC<EditProps> = (props) => {
  const { route, navigation } = props;

  const memberAPI = useMember(route.params.id);

  const [member, setMember] = useState<PartialMember>(
    memberAPI.data ?? PartialMember.create()
  );

  const { update, remove } = memberAPI;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        const handleEdit = (): void => {
          if (PartialMember.isFilled(member) && Member.isValid(member)) {
            navigation.pop();
            update(member);
          }
        };

        return (
          <Button
            onPress={handleEdit}
            disabled={
              !PartialMember.isFilled(member) || !Member.isValid(member)
            }
            title="Save"
          />
        );
      },
    });
  }, [navigation, update, member]);

  const handleMemberDelete = async () => {
    await remove();
    navigation.popToTop();
  };

  return (
    <ScrollView keyboardDismissMode="on-drag">
      <EditableMember
        member={member}
        onMemberChange={setMember}
        style={{ marginTop: 16, marginBottom: 200 }}
        onMemberDelete={handleMemberDelete}
      />
    </ScrollView>
  );
};

export default Edit;
