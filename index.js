import App from "./App";
import { AppRegistry } from "react-native";
import "react-native-gesture-handler";

console.log("getAppKeys()=", AppRegistry.getAppKeys());

AppRegistry.registerComponent("hobbster", () => App);
