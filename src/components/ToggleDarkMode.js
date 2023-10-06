import { useTheme } from "@react-navigation/native";
import React, { useState, useContext } from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ThemeContext from "../context/ThemeContext";

const ToggleDarkMode = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const { colors } = useTheme();

  const toggleSwitch = () => {
    setIsEnabled((prevState) => !prevState);
    setTheme(() => setTheme(theme === "light" ? "dark" : "light"));
  };

  return (
    <View>
      <TouchableOpacity
        onPress={toggleSwitch}
        style={[
          styles.containerSwitch,
          {
            backgroundColor: colors.darkModeToggleBackground,
            borderWidth: 2,
            borderColor: colors.black,
          },
        ]}
      >
        <View
          style={[
            styles.circle,
            { transform: [{ translateX: isEnabled ? 20 : 0 }] },
          ]}
        >
          <Text style={styles.imageBackground}>{!isEnabled ? "☀" : "☾"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleDarkMode;

const styles = StyleSheet.create({
  containerSwitch: {
    borderRadius: 15,
    width: 50,
    height: 28,
    justifyContent: "center",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    flex: 1,
    fontSize: 20,
  },
});
