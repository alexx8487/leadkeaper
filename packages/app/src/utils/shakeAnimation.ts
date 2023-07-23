import { useCallback, useEffect, useRef } from "react";
import { Animated } from "react-native";

interface ShakeAnimationProps {
  autoPlay?: boolean;
  amplitude?: number;
  duration?: number;
}

function useShakeAnimation(
  props: ShakeAnimationProps = {}
): [Animated.Value, () => void] {
  const { autoPlay, amplitude = 10, duration = 400 } = props;

  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const shake = useCallback(() => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: amplitude,
        duration: duration / 4,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -amplitude,
        duration: duration / 4,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: amplitude,
        duration: duration / 4,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: duration / 4,
        useNativeDriver: true,
      }),
    ]).start();
  }, [amplitude, duration]);

  useEffect(() => {
    if (autoPlay) {
      shake();
    }
  }, [autoPlay, shake]);

  return [shakeAnimation, shake];
}

export default useShakeAnimation;
