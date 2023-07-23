import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";

import { EditableMemberData } from "../EditableMemberData";
import { EditableSubscriptionData } from "../EditableSubscriptionData";
import { Button } from "../Button";

export const Layout = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LAYOUT_GAP = 20;

export const Member = styled(EditableMemberData)`
  /** Layout styles */
  width: 100%;
  margin-top: ${LAYOUT_GAP}px;
`;

export const Subscription = styled(EditableSubscriptionData)`
  /** Layout styles */
  width: 100%;
  margin-top: ${LAYOUT_GAP}px;
`;

export const DeleteButton = styled(Button)`
  /** Layout styles */
  width: 100%;
  margin-top: ${LAYOUT_GAP}px;
`;

export type EditableMemberStyleProp = StyleProp<ViewStyle>;
