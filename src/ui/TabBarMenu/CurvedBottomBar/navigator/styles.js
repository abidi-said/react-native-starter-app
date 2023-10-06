import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const useStyle = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    wrapContainer: {
      flex: 1,
      backgroundColor: colors.glass,
    },
    routeNameContainer: {
      // backgroundColor: colors.primaryBackground,
    },
    svgContainer: {
      alignSelf: "center",
      position: "absolute",
      bottom: 0,
    },
    main: {
      position: "absolute",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    rowLeft: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    rowRight: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
};
export default useStyle;
