import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import AppContainer from "./AppContainer";
import store, { persister } from "./src/Redux/store";
import i18n from "./translations/i18n";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  async function loadAppData() {
    await i18n.initAsync();
    // load fonts
    await Font.loadAsync({
      "Klasik-Regular": require("./assets/fonts/Klasik-Regular.otf"),
      "Klasik-Rough": require("./assets/fonts/Klasik-Rough.otf"),
      "Klasik-Shadow": require("./assets/fonts/Klasik-Shadow.otf"),

      "Manrope-Regular": require("./assets/fonts/Manrope-Regular.otf"),
      "Manrope-Light": require("./assets/fonts/Manrope-Light.otf"),
    });
    setFontLoaded(true);
  }

  useEffect(() => {
    loadAppData();
  }, []);

  useEffect(() => {
    async function hideSpalshScreen() {
      await SplashScreen.hideAsync();
    }
    if (fontLoaded) {
      hideSpalshScreen();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};
export default App;
