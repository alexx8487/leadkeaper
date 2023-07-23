import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { Avatar } from "../Avatar";

import { ReadonlyMemberData } from "../ReadonlyMemberData";
import { ReadonlySubscriptionData } from "../ReadonlySubscriptionData";

export const Layout = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LAYOUT_GAP = 20;

export const MemberAvatar = styled(Avatar)`
  width: 180px;
  height: 180px;
  /* background-color: #999999;
  border-radius: 90px; */
`;

export const Name = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;
  color: #000000;
  text-align: center;

  /** Layout styles */
  width: 100%;
  margin-top: ${LAYOUT_GAP}px;
`;

export const Member = styled(ReadonlyMemberData)`
  /** Layout styles */
  width: 100%;
  margin-top: ${LAYOUT_GAP}px;
`;

export const Subscription = styled(ReadonlySubscriptionData)`
  /** Layout styles */
  width: 100%;
  margin-top: ${LAYOUT_GAP}px;
`;

export type ReadonlyMemberStyleProp = StyleProp<ViewStyle>;
