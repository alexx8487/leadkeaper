import React, { FC, useEffect, useRef } from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";
import { useCallbackRef } from "../../hooks";

import * as Styles from "./ErrorView.styles";

interface ErrorViewProps {
  style?: StyleProp<ViewStyle>;
  message: string;
  showDuration: number;
  onClose: () => void;
}

const ANIMATION_DURATION = 200;

const ErrorView: FC<ErrorViewProps> = (props) => {
  const { style, message, showDuration, onClose } = props;

  const animation = useRef(new Animated.Value(0));

  const closeRef = useCallbackRef(onClose);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animation.current, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animation.current, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        delay: showDuration - ANIMATION_DURATION * 2,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      closeRef.current();
    }, showDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [showDuration, closeRef]);

  return (
    <Styles.Container style={style}>
      <Styles.Box style={{ opacity: animation.current }}>
        <Styles.Message>{message}</Styles.Message>
      </Styles.Box>
    </Styles.Container>
  );
};

export default ErrorView;
