import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Icon = styled(Ionicons).attrs({
  name: "search",
  size: 16,
  color: "rgba(131, 131, 161, 0.6)",
})`
  margin-right: 4px;
`;

export const Input = styled.TextInput`
  font-size: 17px;
  line-height: 22px;
`;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 7px 16px;
  background: rgba(118, 118, 128, 0.12);
  border-radius: 10px;
`;
