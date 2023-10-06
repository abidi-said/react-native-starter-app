import { Platform, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../Theme";

const useStyle = () => {
  return StyleSheet.create({
    userName: {
      fontSize: 18,
      color: COLORS.Sunset,
      fontFamily: FONTS.KLASIK_REGULAR,
      paddingTop: 8,
      paddingLeft: 4,
    },
    drawerRowStyle: {
      marginHorizontal: 0,
      paddingVertical: 8,
      justifyContent: "center",
      verflow: "hidden",
    },
    drawerRowbackViewStyle: {
      opacity: 0.3,
      height: 48,
      borderRadius: 24,
      borderTopEndRadius: 0,
      borderBottomEndRadius: 0,
      display: "flex",
      alignSelf: "flex-end",
      borderColor: COLORS.Morning,
      borderWidth: 1,
      borderRightWidth: 0,
    },
    drawerRowTextStyle: {
      fontSize: 16,
      marginLeft: 10,
      fontWeight: "500",
    },
    drawerRowContentContainer: {
      flexDirection: "row",
      padding: 8,
      paddingHorizontal: 16,
      position: "absolute",
      // alignSelf: "center",
      left: 50,
    },
    drawerAvatarStyle: {
      width: 110,
      height: 110,
      borderRadius: 60,
    },
    avatarShadow: {
      backgroundColor: "white",
      elevation: 24,
      shadowColor: COLORS.Morning,
      shadowOffset: { width: 2, height: 4 },
      shadowOpacity: 0.6,
      shadowRadius: 8,
    },
    divider: {
      backgroundColor: COLORS.Morning,
      height: StyleSheet.hairlineWidth,
    },
    signOutBtnStyle: {
      flexDirection: "row",
      padding: 20,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: COLORS.Morning,
    },
    signOutText: {
      flex: 1,
      color: COLORS.black,
      fontSize: 16,
      fontFamily: FONTS.KLASIK_REGULAR,
    },
  });
};

export default useStyle;
