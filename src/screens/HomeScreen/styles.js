import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { hp, wp } from "../../Utils/ResponsiveLayout";
import { FONTS } from "../../Theme";

const useStyle = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    topContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginHorizontal: wp(5),
      marginTop: hp(30),
    },
    dateContainer: {
      paddingVertical: hp(6),
      paddingHorizontal: wp(12),
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.black,
      borderRadius: 60,
      marginVertical: hp(14),
      alignSelf: "center",
    },
    dateText: {
      fontSize: wp(25),
      fontFamily: FONTS.KLASIK_REGULAR,
      color: colors.white,
    },
    darkModeToggleContainer: {
      display: "flex",
      alignItems: "center",
      paddingHorizontal: 30,
      marginTop: 60,
    },
    darkModeToggleTitle: {
      color: colors.black,
      fontSize: 16,
      marginBottom: 10,
    },
  });
};
export default useStyle;
