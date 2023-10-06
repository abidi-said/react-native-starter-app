import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { hp, wp } from "../Utils/ResponsiveLayout";
import { COLORS, FONTS } from "../Theme";

const Loader = ({ title = "Fetching hobbster data" }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.primaryYellow} />
      <Text style={styles.loaderText}>{title}</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.black06,
    ...StyleSheet.absoluteFillObject,
  },
  loaderText: {
    fontSize: wp(22),
    fontFamily: FONTS.KLASIK_REGULAR,
    color: COLORS.white,
    marginTop: hp(16),
  },
});
