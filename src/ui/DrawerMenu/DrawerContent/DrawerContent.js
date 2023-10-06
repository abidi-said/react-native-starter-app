import React from "react";
import { View, Text, useWindowDimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DrawerContentScrollView,
  useDrawerProgress,
} from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AssetsIcons } from "../../../assets";
import MyPressable from "../../../components/MyPressable";
import { COLORS, FONTS } from "../../../Theme";
import useStyle from "./styles";

const DRAWER_SCENES = [
  { label: "Home", icon: "home", routeKey: "Home" },
  {
    label: "Contact Us",
    icon: AssetsIcons.chat,
    isAssetIcon: true,
    routeKey: "help",
  },
  { label: "Feedback", icon: "help", routeKey: "feedback" },
  { label: "Share App", icon: "group", routeKey: "invite_friend" },
  { label: "Rate the app", icon: "share" },
  { label: "About Us", icon: "info" },
];

const getActiveRouteState = (routes, index, routeKey) =>
  routes[index].name.toLowerCase().indexOf(routeKey?.toLowerCase()) >= 0;

const DrawerItemRow = (props) => {
  const {
    state,
    label,
    icon,
    isAssetIcon = false,
    routeKey,
    bgAnimStyle,
  } = props;
  const { routes, index } = state;
  const styles = useStyle();

  const sceneOptions = props.descriptors[routes[index].key]?.options;

  const window = useWindowDimensions();
  const rowWidth = (window.width * 0.75 * 80) / 100;

  const focused = routeKey
    ? getActiveRouteState(routes, index, routeKey)
    : false;

  const tintColor = focused
    ? sceneOptions?.drawerActiveBackgroundColor
    : COLORS.black;

  return (
    <MyPressable
      style={styles.drawerRowStyle}
      touchOpacity={0.6}
      onPress={() =>
        routeKey
          ? props.navigation.navigate(routeKey)
          : props.navigation.dispatch(DrawerActions.closeDrawer())
      }
    >
      <Animated.View
        style={[
          styles.drawerRowbackViewStyle,
          {
            width: rowWidth,
            backgroundColor: focused
              ? sceneOptions?.drawerActiveBackgroundColor
              : sceneOptions?.drawerInactiveBackgroundColor,
          },
          bgAnimStyle,
        ]}
      />
      <View style={styles.drawerRowContentContainer}>
        {isAssetIcon ? (
          <Image
            source={icon}
            style={{ width: 24, height: 24, tintColor }}
            resizeMode="contain"
          />
        ) : (
          <Icon name={icon} size={24} color={tintColor} />
        )}
        <Text
          numberOfLines={1}
          style={[styles.drawerRowTextStyle, { color: tintColor }]}
        >
          {label}
        </Text>
      </View>
    </MyPressable>
  );
};

const DrawerContent = (props) => {
  const window = useWindowDimensions();
  const rowWidth = (window.width * 0.75 * 80) / 100;
  const progress = useDrawerProgress();
  const styles = useStyle();

  const drawerStyle = useAnimatedStyle(() => {
    const drawerProgress = progress;

    return {
      transform: [
        { rotate: `${interpolate(drawerProgress.value, [0, 1], [1, 0])}rad` },
        { scale: interpolate(drawerProgress.value, [0, 1], [0.1, 1]) },
      ],
    };
  }, []);
  const bgAnimStyle = useAnimatedStyle(() => {
    const drawerProgress = progress;

    return {
      transform: [
        {
          translateX: interpolate(
            drawerProgress.value,
            [1, 0.5],
            [0, -rowWidth]
          ),
        },
      ],
    };
  }, []);

  return (
    <SafeAreaView edges={["right", "bottom", "left"]} style={{ flex: 1 }}>
      <View style={{ padding: 16, marginTop: 40 }}>
        <Animated.View
          style={[styles.drawerAvatarStyle, styles.avatarShadow, drawerStyle]}
        >
          <Animated.Image
            style={styles.drawerAvatarStyle}
            source={AssetsIcons.avatar}
          />
        </Animated.View>
        <Text style={styles.userName}>Abidi Said</Text>
      </View>
      <View style={styles.divider} />

      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 0,
        }}
        scrollEnabled={false}
      >
        {DRAWER_SCENES.map((scene) => (
          <DrawerItemRow
            key={scene.label}
            {...{ ...props, ...scene, bgAnimStyle }}
          />
        ))}
      </DrawerContentScrollView>

      <MyPressable style={styles.signOutBtnStyle}>
        <Text style={styles.signOutText}>Sign Out</Text>
        <Icon name="power-settings-new" size={20} color={COLORS.Sunset} />
      </MyPressable>
    </SafeAreaView>
  );
};

export default DrawerContent;
