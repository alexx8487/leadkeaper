import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";

import { VList, VListStyleProp } from "../VList";

export const Layout = styled(VList)`
  background: #ffffff;
  border-radius: 10px;
`;

export type ReadonlySubscriptionDataStyleProp = VListStyleProp;
