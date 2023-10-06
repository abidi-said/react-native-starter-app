import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const MainStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

const screenOptionStyle = {
  title: null,
  headerShown: false,
  elevation: 0,
  headerShadowVisible: false,
  shadowOpacity: 0,
};

const MainStackNavigator = () => (
  <MainStack.Navigator screenOptions={screenOptionStyle}>
    <MainStack.Screen name="HomeScreen" component={HomeScreen} />
    {/* about, contact... screens */}
  </MainStack.Navigator>
);

const SettingStackScreen = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "none",
        },
        title: null,
        headerShown: false,
        elevation: 0,
        headerShadowVisible: false,
        shadowOpacity: 0,
      }}
    >
      <SettingsStack.Screen name="Setting" component={HomeScreen} />
    </SettingsStack.Navigator>
  );
};

export { MainStackNavigator, SettingStackScreen };
