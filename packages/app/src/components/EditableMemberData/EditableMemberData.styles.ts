import styled from "styled-components/native";

import { EditableField } from "../EditableField";
import { VList, VListStyleProp } from "../VList";

export const Layout = styled(VList)`
  background-color: #ffffff;
`;

export const Field = styled(EditableField)`
  /** Layout styles */
  width: 100%;
`;

export type EditableMemberDataStyleProp = VListStyleProp;
