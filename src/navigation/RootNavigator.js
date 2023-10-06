import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import MyDrawer from "./MainTabScreen";

const Root = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Root.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}
      initialRouteName="MainStack"
    >
      <Root.Screen name="MyDrawer" component={MyDrawer} />
    </Root.Navigator>
  );
};

export default RootNavigator;
