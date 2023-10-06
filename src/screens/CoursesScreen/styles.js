import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { hp, wp } from "../../Utils/ResponsiveLayout";
import { FONTS, COLORS } from "../../Theme";

const useStyle = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: COLORS.primaryBackground,
      paddingTop: 60,
    },
    topContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: wp(24),
      marginTop: hp(16),
    },
    dateContainer: {
      paddingVertical: hp(6),
      paddingHorizontal: wp(12),
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.black,
      borderRadius: 60,
      marginVertical: hp(14),
      alignSelf: "center",
    },
    dateText: {
      fontSize: wp(25),
      fontFamily: FONTS.KLASIK_REGULAR,
      color: COLORS.white,
    },
  });
};
export default useStyle;
