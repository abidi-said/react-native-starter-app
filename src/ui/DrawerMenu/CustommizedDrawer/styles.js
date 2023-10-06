import { useTheme } from "@react-navigation/native";
import { Platform, StyleSheet } from "react-native";

const useStyle = ({ position }) => {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    btnCircleContainer: {
      backgroundColor: colors.glass,
    },
    btnCircleStroke: {
      position: "absolute",
      width: 66,
      height: 66,
      borderRadius: 30,
      backgroundColor: colors.plusButtonSecondaryBackground,
      bottom: -3,
      right: -3,
      opacity: 0.4,
      borderRadius: 64,
    },
    btnCircle: {
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.plusButtonPrimaryBackground,
      position: "relative",
      shadowColor: position === "up" ? colors.shadow : colors.white,
      elevation: 10,
    },
    btnCircleDown: {
      bottom: 35,
    },
    btnCircleUp: {
      bottom: 18,
    },
    imgCircle: {
      width: 30,
      height: 30,
      tintColor: "#48CEF6",
    },
    img: {
      width: 30,
      height: 30,
    },
  });
};

export default useStyle;
