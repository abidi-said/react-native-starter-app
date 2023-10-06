import React from "react";
import { Pressable, Platform } from "react-native";
const MyPressable = ({
  style,
  android_ripple = { color: "lightgrey" },
  touchOpacity = 0.4,
  children,
  ...restOfPRops
}) => {
  const isAndroid = Platform.OS === "android";
  return (
    <Pressable
      style={({ pressed }) => [
        style,
        { opacity: !isAndroid && pressed ? touchOpacity : 1 },
      ]}
      {...restOfPRops}
    >
      {children}
    </Pressable>
  );
};

export default MyPressable;
