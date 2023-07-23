import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";

import { Avatar } from "../Avatar";

export const Layout = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
`;

export const ListAvatar = styled(Avatar)`
  width: 48px;
  height: 48px;
  /* background-color: #999999;
  border-radius: 24px; */
`;

export const InfoLayout = styled.View`
  display: flex;
  flex-direction: column;

  /** Layout styles */
  margin-left: 12px;
  flex-grow: 1;
`;

export const Name = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #000000;

  /** Layout styles */
  width: 100%;
`;

export const LessonCount = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: rgba(60, 60, 67, 0.6);

  /** Layout styles */
  width: 100%;
`;

export type MemberListItemStyleProp = StyleProp<ViewStyle>;
