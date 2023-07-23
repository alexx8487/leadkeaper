import { Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Box = styled(Animated.View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  border-radius: 16px;
`;

export const Message = styled.Text`
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  color: #f11c00;
`;
