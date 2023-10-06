import React, { useState } from "react";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { CurvedBottomBar } from "../../TabBarMenu";
import AnimatedLottieView from "lottie-react-native";
import { Home } from "../../../Theme/icons/Home.json";
import Animated from "react-native-reanimated";
import useStyle from "./styles";
import { useTheme } from "@react-navigation/native";

StatusBar.setBarStyle("dark-content");

const CustommizedDrawer = (props) => {
  const { colors } = useTheme();
  const [type, setType] = useState("down");
  const styles = useStyle({ position: type });

  const onClickButton = () => {
    if (type === "up") {
      setType("down");
      console.log("Change type curve down");
    } else {
      setType("up");
      console.log("Change type curve up");
    }
  };

  const _renderIcon = (routeName, selectTab) => {
    let icon = "";

    switch (routeName) {
      case "Home":
        icon = Home;
        break;
      case "Courses":
        icon = require("../../../Theme/icons/Courses.json");
        break;
      case "Community":
        icon = require("../../../Theme/icons/Community.json");
        break;
      case "Settings":
        icon = require("../../../Theme/icons/Setting.json");
        break;
    }

    return (
      <AnimatedLottieView
        source={icon}
        style={{ mixBlendMode: "luminosity", filter: "gray" }}
      />
    );
  };
  const screens = props?.screens;

  return (
    <View style={styles.container}>
      <Animated.View style={[{ flex: 1 }]}>
        <CurvedBottomBar.Navigator
          style={{ backgroundColor: colors.glass }}
          type={type}
          height={60}
          circleWidth={30}
          bgColor={colors.bottomMenuBackground}
          borderTopLeftRight={true}
          initialRouteName="Home"
          renderCircle={() => (
            <View style={styles.btnCircleContainer}>
              <TouchableOpacity
                style={[
                  styles.btnCircle,
                  type === "down" ? styles.btnCircleDown : styles.btnCircleUp,
                ]}
                onPress={onClickButton}
              >
                <AnimatedLottieView
                  source={require("../../../Theme/icons/Add.json")}
                  style={{ zIndex: 2222 }}
                  colorFilters="gray"
                />

                {type === "down" && (
                  <View style={styles.btnCircleStroke}></View>
                )}
              </TouchableOpacity>
            </View>
          )}
          tabBar={({ routeName, selectTab, navigation }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation(routeName)}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {_renderIcon(routeName, selectTab)}
              </TouchableOpacity>
            );
          }}
        >
          {screens.map((screen, index) => (
            <CurvedBottomBar.Screen
              key={index}
              name={screen.name}
              component={() => screen.component}
              position={screen.position}
            />
          ))}
        </CurvedBottomBar.Navigator>
      </Animated.View>
    </View>
  );
};

export default CustommizedDrawer;
