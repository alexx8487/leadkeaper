import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";

export const Line = styled.View`
  height: 0.5px;
  background: #000000;
  opacity: 0.2;

  /** Container styles */
  width: 100%;
`;

export const Container = styled.View`
  padding: 0px 0px 0px 16px;
`;

export type DividerStyleProp = StyleProp<ViewStyle>;
