import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
// reducers
import hobbsterSlice from "./hobbsterSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const pReducer = persistReducer(persistConfig, hobbsterSlice);

const store = configureStore({
  reducer: {
    hobbster: pReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export const persister = persistStore(store);
