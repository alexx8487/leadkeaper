import React, { FC } from "react";

import * as Styles from "./InfoBlockField.styles";

interface InfoBlockFieldProps {
  label?: string;
  onPress?: () => void;
}

const InfoBlockField: FC<InfoBlockFieldProps> = (props) => {
  const { children, label, onPress } = props;

  return (
    <Styles.Field onPress={onPress}>
      {children}

      {label && <Styles.FieldLabel>{label}</Styles.FieldLabel>}
    </Styles.Field>
  );
};

export default InfoBlockField;
