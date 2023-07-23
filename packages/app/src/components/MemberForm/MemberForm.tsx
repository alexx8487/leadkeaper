import React, { FC } from "react";
import { View } from "react-native";
import { Member } from "@xxx-shuffle/domain";

import { FormInput } from "../FormInput";

interface MemberFormProps {
  member: Member;
  onChange?: (data: Member.Update) => void;
  onFieldSubmit?: (field: keyof Member) => void;
}

const MemberForm: FC<MemberFormProps> = (props) => {
  const { member, onFieldSubmit, onChange } = props;

  const createChangeHandler = (field: keyof Member) => (text: string) =>
    onChange?.(Member.set(field, text)(member));

  const createFieldSubmitHandler = (field: keyof Member) => {
    if (onFieldSubmit) {
      return () => onFieldSubmit(field);
    } else {
      return undefined;
    }
  };

  return (
    <View>
      <FormInput
        label="Name"
        value={member.name}
        onChangeText={createChangeHandler("name")}
        onSubmitEditing={createFieldSubmitHandler("name")}
        placeholder="Ivanov Ivan"
      />

      <FormInput
        label="Phone"
        value={member.phone}
        onChangeText={createChangeHandler("phone")}
        onSubmitEditing={createFieldSubmitHandler("phone")}
        placeholder="8(999)999-99-99"
        keyboardType="phone-pad"
      />

      <FormInput
        label="Email"
        value={member.email}
        onChangeText={createChangeHandler("email")}
        onSubmitEditing={createFieldSubmitHandler("email")}
        placeholder="ivanov.ivan@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </View>
  );
};

export default MemberForm;
