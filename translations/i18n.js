import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import { I18n as RNI18n } from "i18n-js";
import { Platform } from "react-native";
import { en } from "./en";
import { fr } from "./fr";

const i18n = new RNI18n({
  en,
  fr,
});
i18n.initAsync = async () => {
  i18n.fallbacks = true;
  // i18n.translations = { fr, en };
  const lang = await AsyncStorage.getItem("hobbster-language");
  if (Platform.OS === "android") {
    i18n.locale = lang || "en";
  } else {
    i18n.locale = Localization.locale || "en";
  }
};

export default i18n;
