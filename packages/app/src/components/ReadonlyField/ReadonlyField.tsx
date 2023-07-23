import React, { FC } from "react";

import * as Styles from "./ReadonlyField.styles";

export interface ReadonlyFieldProps {
  style?: Styles.ReadonlyFieldStyleProp;
  label: string;
  value: string;
  error?: boolean;
  onPress?: () => void;
}

const ReadonlyField: FC<ReadonlyFieldProps> = (props) => {
  const { style, label, value, error, onPress } = props;

  return (
    <Styles.Layout style={style} onPress={onPress}>
      <Styles.Label>{label}</Styles.Label>

      <Styles.Value error={error}>{value}</Styles.Value>
    </Styles.Layout>
  );
};

export default ReadonlyField;
