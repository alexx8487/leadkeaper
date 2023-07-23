import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";

export const Layout = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

export const Label = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
`;

export const Input = styled.TextInput`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  color: #000000;

  /** Layout styles */
  margin-left: 20px;
  flex-grow: 1;
`;

export const PLACEHOLDER_COLOR = "rgba(60, 60, 67, 0.3)";

export type EditableFieldStyleProp = StyleProp<ViewStyle>;
