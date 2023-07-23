import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";

import { Button } from "../Button";
import { ReadonlyMember } from "../ReadonlyMember";

export const Layout = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 30px;
  background-color: #f2f2f7;
`;

export const Member = styled(ReadonlyMember)`
  /** Layout styles */
  width: 100%;
`;

export const CheckInButton = styled(Button)`
  /** Layout styles */
  width: 100%;
`;

export const SuccessText = styled.Text`
  padding: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  color: #00d900;

  /** Layout styles */
  width: 100%;
`;

export type ShortMemberCardStyleProp = StyleProp<ViewStyle>;
