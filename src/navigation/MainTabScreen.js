import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CustommizedDrawer from "../ui/DrawerMenu/CustommizedDrawer/CustommizedDrawer";
import CoursesScreen from "../screens/CoursesScreen/CoursesScreen";
import DrawerContent from "../ui/DrawerMenu/DrawerContent/DrawerContent";
import DrawerSceneWrapper from "../ui/DrawerMenu/DrawerSceneWrapper";
import { COLORS } from "../Theme";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const MyBottomTabs = (props) => {
  return (
    <CustommizedDrawer
      {...props}
      screens={[
        { name: "Home", component: <HomeScreen />, position: "left" },
        { name: "Courses", component: <CoursesScreen />, position: "left" },
        { name: "Community", component: <HomeScreen />, position: "right" },
        { name: "Settings", component: <HomeScreen />, position: "right" },
      ]}
    />
  );
};

const Screens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: null,
        title: null,
        headerShown: false,
        elevation: 0,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name={"MainTab"} component={MyBottomTabs} />
    </Stack.Navigator>
  );
};

const MyDrawer = (props) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return <DrawerContent {...props} />;
      }}
      screenOptions={{
        activeBackgroundColor: COLORS.transparent,
        activeTintColor: "white",
        inactiveTintColor: "white",
        drawerType: "front",
        overlayColor: COLORS.transparent,

        drawerStyle: {
          backgroundColor: COLORS.lightWhite,
          width: "65%",
        },

        drawerActiveBackgroundColor: COLORS.Morning,
        drawerInactiveBackgroundColor: COLORS.lightGrey,
        drawerActiveTintColor: COLORS.Eclipse,
        drawerInactiveTintColor: COLORS.Eclipse,
        drawerHideStatusBarOnOpen: Platform.OS === "ios" ? true : false,

        title: null,
        headerShown: false,
        elevation: 0,
        headerShadowVisible: false,
        shadowOpacity: 0,
        headerStyle: {
          backgroundColor: COLORS.primaryBackground,
        },

        // headerLeft:
      }}
    >
      <Drawer.Screen name="Screens">
        {(props) => (
          <DrawerSceneWrapper>
            <Screens {...props} />
          </DrawerSceneWrapper>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({
  imageContainer: {
    tintColor: COLORS.Morning,
    height: 35,
    width: 35,
  },
  stack: {
    flex: 1,
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: "hidden",
  },
  menu: {
    width: 38,
    height: 38,
    margin: 20,
  },
});
