import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const Layout = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  padding: 16px;
  align-items: center;

  /** Layout styles */
  width: 100%;
`;

export const Label = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
`;

export const Value = styled.Text<{ filled: boolean }>`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  color: ${({ filled }) => (filled ? "#000000" : "rgba(60, 60, 67, 0.3)")};

  /** Layout styles */
  margin-left: 20px;
  flex-grow: 1;
`;

export const Input = styled(DateTimePicker)`
  /** Layout styles */
  /* width: 100%; */
  width: 70%;
  margin: 0 15%;
`;

export type EditableDateFieldStyleProp = StyleProp<ViewStyle>;
