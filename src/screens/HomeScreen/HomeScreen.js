import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";

import { useSelector } from "react-redux";

import Loader from "../../components/Loader";
import useStyle from "./styles";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import i18n from "../../../translations/i18n";
import HButton from "../../components/HButton";
import { AssetsIcons } from "../../assets";
import { COLORS } from "../../Theme";
import ToggleDarkMode from "../../components/ToggleDarkMode";
import GradientBlock from "../../components/GradientBlock";

const HomeScreen = () => {
  const isLoading = useSelector((state) => state.hobbster.isLoading);
  const [refreshing, setRefreshing] = useState(false);
  const styles = useStyle();

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <GradientBlock />
      <View>
        <View style={styles.topContainer}>
          <HButton
            imageStyle={{
              tintColor: COLORS.Dimas,
              width: 25,
            }}
            iconSource={AssetsIcons.drawer}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
          <HButton
            imageStyle={{ width: 30, height: 30 }}
            iconSource={AssetsIcons.avatar}
            onPress={() => {}}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => {}} />
          }
        >
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{i18n.t("home")}</Text>
          </View>
          <View style={styles.darkModeToggleContainer}>
            <Text style={styles.darkModeToggleTitle}>dark mode toggle</Text>
            <ToggleDarkMode />
          </View>
        </ScrollView>
        {isLoading && <Loader title="Loading" />}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
