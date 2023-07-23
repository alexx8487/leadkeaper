import React, { FC, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "react-native";

import { ScanQRRoute, ScanQRRouteParams } from "./routes";
import { useMember } from "../../../store/hooks";
import { ShortMemberCard } from "../../../components/ShortMemberCard";

interface ScanResultProps
  extends NativeStackScreenProps<ScanQRRouteParams, ScanQRRoute.Result> {}

const ScanResult: FC<ScanResultProps> = (props) => {
  const { navigation } = props;
  const { memberId } = props.route.params;

  const memberAPI = useMember(memberId);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        const handleEdit = (): void => {
          navigation.push(ScanQRRoute.Edit, { id: memberId });
        };

        return <Button onPress={handleEdit} title="Edit" />;
      },
    });
  }, [navigation, memberId]);

  if (memberAPI.data === undefined) {
    return null;
  }

  return (
    <ShortMemberCard
      member={memberAPI.data}
      onCheckIn={memberAPI.checkIn}
      isCheckedIn={memberAPI.isCheckedIn}
      style={{ height: "100%" }}
    />
  );
};

export default ScanResult;
