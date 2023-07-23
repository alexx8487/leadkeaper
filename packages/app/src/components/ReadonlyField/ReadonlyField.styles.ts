import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";

export const Label = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #000000;

  /** Layout styles */
  width: 100%;
`;

interface ValueProps {
  error?: boolean;
}

export const Value = styled.Text<ValueProps>`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  color: ${({ error }) => (error ? "#F11C00" : "#007aff")};

  /** Layout styles */
  width: 100%;
`;

export const Layout = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
`;

export type ReadonlyFieldStyleProp = StyleProp<ViewStyle>;
