import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import Loader from "../../components/Loader";
import useStyle from "./styles";
import i18n from "../../../translations/i18n";

const CoursesScreen = () => {
  const isLoading = true;
  const styles = useStyle();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{i18n.t("courses")}</Text>
        </View>
      </ScrollView>
      {isLoading && <Loader title="Loading" />}
    </SafeAreaView>
  );
};

export default CoursesScreen;
