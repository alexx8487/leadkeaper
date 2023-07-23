import React, { FC } from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { ReadonlyField } from "../ReadonlyField";

export const Layout = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 16px;
`;

export const Field = styled(ReadonlyField)`
  /** Layout styles */
  flex-grow: 1;
`;

export const Arrow: FC = () => (
  <Ionicons
    name="chevron-forward"
    color="#007AFF"
    size={24}
    style={{ marginLeft: 10 }}
  />
);

export type SelectFieldStyleProp = StyleProp<ViewStyle>;
