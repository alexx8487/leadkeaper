import React, { FC } from "react";
import { Alert } from "react-native";

import * as Styles from "./Button.styles";

export interface ButtonProps extends Styles.ButtonProps {
  style?: Styles.ButtonStyleProp;
  label: string;
  onPress: () => void;
  confirmationText?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { style, label, onPress, type, confirmationText } = props;

  const handlePress = () => {
    if (type !== "dangerous") {
      onPress();
    } else {
      Alert.alert(confirmationText ?? "Confirm action", undefined, [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Confirm", onPress, style: "destructive" },
      ]);
    }
  };

  return (
    <Styles.Layout style={style} type={type} onPress={handlePress}>
      <Styles.Text type={type}>{label}</Styles.Text>
    </Styles.Layout>
  );
};

export default Button;
