import React, { FC, useRef } from "react";
import { KeyboardTypeOptions, TextInput, TextInputProps } from "react-native";

import * as Styles from "./FormInput.styles";

interface FormInputProps extends TextInputProps {
  label?: string;
}

const FormInput: FC<FormInputProps> = (props) => {
  const { label } = props;

  const ref = useRef<TextInput>(null);

  const handlePress = (): void => {
    ref.current?.focus();
  };

  return (
    <Styles.Box onPress={handlePress}>
      <Styles.Input
        ref={ref}
        {...props}
        clearButtonMode="while-editing"
        returnKeyType={props.onSubmitEditing ? "done" : "none"}
        placeholderTextColor="#dddddd"
      />

      {label && <Styles.Label>{label}</Styles.Label>}
    </Styles.Box>
  );
};

export default FormInput;
