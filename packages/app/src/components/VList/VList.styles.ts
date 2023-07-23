import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";

import { Divider } from "../Divider";

export const Layout = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Separator = styled(Divider)`
  width: 100%;
`;

export type VListStyleProp = StyleProp<ViewStyle>;
