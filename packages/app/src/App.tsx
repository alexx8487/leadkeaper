import React, { FC } from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { store } from "./store";
import AppRouter from "./AppRouter";
// import "./mocks/createServer";

const App: FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />

        <AppRouter />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
