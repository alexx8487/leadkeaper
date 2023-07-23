import React, { FC } from "react";
import { MemberShortDTO } from "@xxx-shuffle/domain";
import { View, Text, Button } from "react-native";

interface MemberSubscriptionCardProps {
  member: MemberShortDTO;
  onCheckIn: () => void;
}

const MemberSubscriptionCard: FC<MemberSubscriptionCardProps> = (props) => {
  const { member, onCheckIn } = props;

  return (
    <View>
      <Text>{member.name}</Text>

      <Text>Lessons: {member.lessonCount}</Text>

      <Button title="Check in" onPress={onCheckIn} />
    </View>
  );
};

export default MemberSubscriptionCard;
