import React, { FC } from "react";

import * as Styles from "./SelectField.styles";

export interface SelectFieldProps {
  style?: Styles.SelectFieldStyleProp;
  label: string;
  value: string | undefined;
  onPress: () => void;
}

const SelectField: FC<SelectFieldProps> = (props) => {
  const { style, label, value = "None", onPress } = props;

  return (
    <Styles.Layout style={style} onPress={onPress}>
      <Styles.Field label={label} value={value} />

      <Styles.Arrow />
    </Styles.Layout>
  );
};

export default SelectField;
