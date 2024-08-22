import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function RotatingBaby() {
  const rotation = useSharedValue<number>(0);
  const animation = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }));

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(-360, { duration: 15000, easing: Easing.linear }),
      -1
    );
  }, []);
  return (
    <Animated.Image
      className="w-[300] h-[300] "
      source={require("../assets/images/baby-womb.png")}
      style={animation}
    />
  );
}
