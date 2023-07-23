import { StyleProp, ViewStyle } from "react-native";
import styled, { css } from "styled-components/native";

const stylesByType = {
  primary: {
    layout: css`
      background-color: #000000;
    `,
    text: css`
      color: #ffffff;
    `,
  },
  secondary: {
    layout: css`
      border: 2px solid #000000;
    `,
    text: css`
      color: #000000;
    `,
  },
  dangerous: {
    layout: css`
      /* border: 2px solid #f11c00; */
    `,
    text: css`
      color: #f11c00;
    `,
  },
};

export interface ButtonProps {
  type: keyof typeof stylesByType;
}

export const Layout = styled.TouchableOpacity<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 16px;

  ${({ type }) => stylesByType[type].layout}
`;

export const Text = styled.Text<ButtonProps>`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  text-align: center;

  ${({ type }) => stylesByType[type].text}
`;

export type ButtonStyleProp = StyleProp<ViewStyle>;
