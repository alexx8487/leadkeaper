import React, { FC } from "react";
import { TextInputProps } from "react-native";

import * as Styles from "./EditableField.styles";

export interface EditableFieldProps
  extends Pick<TextInputProps, "keyboardType"> {
  style?: Styles.EditableFieldStyleProp;
  label: string;
  value: string | undefined;
  onValueChange: (value: string) => void;
  placeholder?: string;
}

const EditableField: FC<EditableFieldProps> = (props) => {
  const { style, label, value, onValueChange, placeholder, keyboardType } =
    props;

  return (
    <Styles.Layout style={style}>
      <Styles.Label>{label}</Styles.Label>

      <Styles.Input
        value={value}
        onChangeText={onValueChange}
        placeholderTextColor={Styles.PLACEHOLDER_COLOR}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </Styles.Layout>
  );
};

export default EditableField;
