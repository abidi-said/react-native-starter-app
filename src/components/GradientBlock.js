import { useTheme } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AssetsIcons } from "../assets";

const GradientBlock = ({ color, style, children, ...props }) => {
  const cardStyles = [styles.container, style];
  const { colors, dark } = useTheme();

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1.0, y: 1.5 }}
      locations={[0, 0.6]}
      colors={colors.primaryGradientBackground}
      style={cardStyles}
      {...props}
    >
      {dark === true && (
        <View style={styles.stars}>
          <Image
            source={AssetsIcons.stars} // Replace with your image path
            style={styles.backgroundImage}
            // resizeMethod="auto"
            resizeMode="repeat"
          />
        </View>
      )}
      {children}
    </LinearGradient>
  );
};

export default GradientBlock;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: "102%",
  },
  stars: {
    width: "100%",
    height: "auto",
  },
});
