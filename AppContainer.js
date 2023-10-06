import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import { StatusBar, useColorScheme } from "react-native";
import { COLORS, THEME } from "./src/Theme";
import ThemeContext from "./src/context/ThemeContext";
import { useState } from "react";

const AppContainer = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme);
  const themeData = { theme, setTheme };
  const isDark = theme === "dark";

  return (
    <ThemeContext.Provider value={themeData}>
      <StatusBar
        translucent
        backgroundColor={COLORS.transparent}
        barStyle={isDark ? "light-content" : "dark-content"}
      />
      <NavigationContainer theme={theme === "light" ? THEME.Light : THEME.Dark}>
        <RootNavigator />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default AppContainer;
