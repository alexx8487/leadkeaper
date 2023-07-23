import { ImageStyle, StyleProp, Image } from "react-native";
import { StyledComponent } from "styled-components";
import styled, { css, DefaultTheme } from "styled-components/native";
import { ChickColor } from "./chicks";

const baseImageStyles = css`
  width: 48px;
  height: 48px;
  resize-mode: contain;
`;

const ChickImages: Record<
  ChickColor,
  StyledComponent<typeof Image, DefaultTheme, { source: any }, "source">
> = {
  BluePurple: styled.Image.attrs({
    source: require(`../../../assets/chicks/BluePurple.png`),
  })`
    ${baseImageStyles}
  `,

  BlueYellow: styled.Image.attrs({
    source: require(`../../../assets/chicks/BlueYellow.png`),
  })`
    ${baseImageStyles}
  `,

  GreenBlue: styled.Image.attrs({
    source: require(`../../../assets/chicks/GreenBlue.png`),
  })`
    ${baseImageStyles}
  `,

  PinkOrange: styled.Image.attrs({
    source: require(`../../../assets/chicks/PinkOrange.png`),
  })`
    ${baseImageStyles}
  `,

  PurpleWhite: styled.Image.attrs({
    source: require(`../../../assets/chicks/PurpleWhite.png`),
  })`
    ${baseImageStyles}
  `,

  RedGreen: styled.Image.attrs({
    source: require(`../../../assets/chicks/RedGreen.png`),
  })`
    ${baseImageStyles}
  `,

  YellowBlue: styled.Image.attrs({
    source: require(`../../../assets/chicks/YellowBlue.png`),
  })`
    ${baseImageStyles}
  `,

  YellowPink: styled.Image.attrs({
    source: require(`../../../assets/chicks/YellowPink.png`),
  })`
    ${baseImageStyles}
  `,
};

export function getChickImage(
  chickColor: ChickColor
): StyledComponent<typeof Image, DefaultTheme, { source: any }, "source"> {
  return ChickImages[chickColor];
}

export type AvatarStyleProp = StyleProp<ImageStyle>;
