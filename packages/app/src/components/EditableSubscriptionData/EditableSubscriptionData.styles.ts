import styled from "styled-components/native";

import { EditableDateField } from "../EditableDateField";
import { EditableField } from "../EditableField";
import { SelectField } from "../SelectField";

import { VList, VListStyleProp } from "../VList";

export const Layout = styled(VList)`
  background-color: #ffffff;
`;

export const QRCodeField = styled(SelectField)`
  /** Layout styles */
  width: 100%;
`;

export const TextField = styled(EditableField)`
  /** Layout styles */
  width: 100%;
`;

export const DateField = styled(EditableDateField)`
  /** Layout styles */
  width: 100%;
`;

export type EditableSubscriptionDataStyleProp = VListStyleProp;
