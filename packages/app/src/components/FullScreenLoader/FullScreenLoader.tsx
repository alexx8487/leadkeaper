import React, { FC } from "react";
import { ActivityIndicator } from "react-native";

import * as Styles from "./FullScreenLoader.styles";

const FullScreenLoader: FC = () => {
  return (
    <Styles.Container>
      <ActivityIndicator size="large" />
    </Styles.Container>
  );
};

export default FullScreenLoader;
