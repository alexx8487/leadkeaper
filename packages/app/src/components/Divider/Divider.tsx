import React, { FC } from "react";

import * as Styles from "./Divider.styles";

export interface DividerProps {
  style?: Styles.DividerStyleProp;
}

const Divider: FC<DividerProps> = (props) => {
  const { style } = props;

  return (
    <Styles.Container style={style}>
      <Styles.Line />
    </Styles.Container>
  );
};

export default Divider;
