import React, { FC } from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import { AppRouteParams, AppRoute } from "./routes";
import { HomeScreen } from "../screens";

interface HomeProps
  extends BottomTabScreenProps<AppRouteParams, AppRoute.Home> {}

const Home: FC<HomeProps> = () => {
  return <HomeScreen />;
};

export default Home;
