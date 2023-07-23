import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";

import { MemberListItem } from "../MemberListItem";

export const List = styled.FlatList``;

export const Item = styled(MemberListItem)`
  /** Layout styles */
  width: 100%;
`;

export type MemberListStyleProp = StyleProp<ViewStyle>;
