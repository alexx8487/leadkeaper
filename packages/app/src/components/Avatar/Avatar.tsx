import React, { FC } from "react";

import { ChickColor } from "./chicks";
import * as Styles from "./Avatar.styles";
import { useShakeAnimation } from "../../utils";
import { Animated } from "react-native";

export interface AvatarProps {
  style?: Styles.AvatarStyleProp;
  chickColor: ChickColor;
  isAnimated?: boolean;
}

const Avatar: FC<AvatarProps> = (props) => {
  const { chickColor, style, isAnimated } = props;

  const Image = Styles.getChickImage(chickColor);

  const [animation] = useShakeAnimation({ autoPlay: isAnimated });

  return (
    <Animated.View
      style={{
        transform: [
          {
            rotate: animation.interpolate({
              inputRange: [0, 10],
              outputRange: ["0deg", "10deg"],
            }),
          },
        ],
      }}
    >
      <Image style={style} />
    </Animated.View>
  );
};

export default Avatar;
