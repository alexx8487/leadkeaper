import styled from "styled-components/native";

import { ReadonlyField } from "../ReadonlyField";
import { VList, VListStyleProp } from "../VList";

export const Field = styled(ReadonlyField)`
  width: 100%;
`;

export const Layout = styled(VList)`
  background: #ffffff;
  border-radius: 10px;
`;

export type ReadonlyMemberDataStyleProp = VListStyleProp;
